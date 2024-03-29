import Head from 'next/head';
import Image from 'next/image';
import styles from './styles.module.scss'
import contactSVG from '../../../public/images/svgs/contact.svg'
import ContactForm from '../../components/ContactForm'
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { PageTitle } from '../../components/PageTitle';


export default function pages() {
    return(
        <>
            <Head>
                <meta name="description" content="Bruno Vigel Desenvolvedor Front-End, página de contato"/>
                <title>Contato | Skills</title>
            </Head>
            
            <div className={`${styles.ContactPageContainer} container`}>
                <PageTitle title="Entre em contato!" subtitle="Sinta-se a vontade para me contatar qualquer horário do dia"/>

                <div className={styles.socialsSection}>
                    <Image className={styles.img} src={contactSVG} alt="Imagem da página de contato"/>
                    <ul>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brunovigel/"><FaLinkedin /> Bruno Vigel</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://github.com/BrunoVigel"><FaGithub  /> BrunoVigel</a>
                        </li>
                        
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/brunovigel"><FaInstagram /> @BrunoVigel</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://discord.com/users/1020091811211001897"><FaDiscord />Bruno Vigel #0171</a>
                        </li>
                        <li>
                            <a href="mailto:brunorosav@gmail.com"><FiMail/>brunorosav@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.form}>
                    <p>Ou envie uma mensagem!</p>
                    <ContactForm />
                </div>
                
            </div>
        </>
        
    );
}