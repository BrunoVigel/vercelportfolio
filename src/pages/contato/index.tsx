import Head from 'next/head';
import Image from 'next/image';
import styles from './styles.module.scss'
import contactSVG from '../../Assets/svgs/contact.svg'
import ContactForm from '../../components/ContactForm'
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export default function pages() {
    return(
        <>
            <Head>
                <title>Contato | Skills</title>
            </Head>
            
            <div className="container">
                <div className={styles.socialsSection}>
                    <Image className={styles.img} src={contactSVG}/>
                    <ul>
                        <li>
                            <a href=""><FaLinkedin color={'#a972cb'}/> Bruno Vigel</a>
                            <a href=""><FaGithub  color={'#a972cb'}/> BrunoVigel</a>
                            <a href=""><FaInstagram color={'#a972cb'}/> @BrunoVigel</a>
                            <a href="https://discord.com/users/321397092306124801"><FaDiscord color={'#a972cb'}/>Vigel#0484</a>
                            <a href=""><FiMail color={'#a972cb'}/>brunorosav@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.form}>
                    <p>Entre em contato comigo!</p>
                    <ContactForm />
                </div>
                
            </div>
        </>
        
    );
}