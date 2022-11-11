import styles from './styles.module.scss'
import { FaWhatsapp } from "react-icons/fa";

export function ContactBnt() {
    return(
        <a aria-label='whatsapp' href="https://wa.me/5551995569237" className={styles.ContactBtn}>
            <span>Whatsapp</span>
            <FaWhatsapp/>
        </a>
    )
}