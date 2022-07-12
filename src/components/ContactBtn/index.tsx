import styles from './styles.module.scss'
import { FaWhatsapp } from "react-icons/fa";

export function ContactBnt() {
    return(
        <a href="https://wa.me/5551995569237" className={styles.ContactBtn}>
            <FaWhatsapp/>
        </a>
    )
}