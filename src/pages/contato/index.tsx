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
                <title>Contato | Skills</title>
            </Head>
            
            <div className={`${styles.ContactPageContainer} container`}>
                <PageTitle title="Título da página" subtitle="Aqui fica o subtitle que é uma explicação do conteúdo da página"/>

                <div className={styles.socialsSection}>
                    <Image className={styles.img} src={contactSVG}/>
                    <ul>
                        <li>
                            <a href=""><FaLinkedin /> Bruno Vigel</a>
                        </li>
                        <li>
                            <a href=""><FaGithub  /> BrunoVigel</a>
                        </li>
                        <li>
                            <a href=""><FaInstagram /> @BrunoVigel</a>
                        </li>
                        <li>
                            <a href="https://discord.com/users/321397092306124801"><FaDiscord />Vigel#0484</a>
                        </li>
                        <li>
                            <a href=""><FiMail/>brunorosav@gmail.com</a>
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