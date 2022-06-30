import styles from './styles.module.scss'
import { FaWhatsapp } from "react-icons/fa";

export function ContactBnt() {
    return(
        <a href="https://api.whatsapp.com/send?phone=+555195569237" className={styles.ContactBtn}>
            <FaWhatsapp/>
        </a>
    )
}