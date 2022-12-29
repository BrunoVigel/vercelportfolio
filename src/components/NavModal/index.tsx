import Modal from 'react-modal'
import styles from './styles.module.scss'
import { MdClose } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SwitchButtonMobile } from '../SwitchButtonMobile';


interface NavModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NavModal({isOpen, onRequestClose}: NavModalProps) {
    const router = useRouter();

    return(
        <>
            <Modal className={styles.modal} isOpen={isOpen} onRequestClose={onRequestClose}>
                <ul>
                    <li onClick={onRequestClose}>
                        <Link  href="/" className={router.pathname == "/" ? styles.activeLink : ""}>Home</Link>
                    </li>
                    <li onClick={onRequestClose}>
                        <Link  href="/skills" className={router.pathname == "/skills" ? styles.activeLink : ""}>Skills</Link>
                    </li>
                    <li onClick={onRequestClose}>
                        <Link  href="/projetos" className={router.pathname == "/projetos" ? styles.activeLink : ""}>Projetos</Link>
                    </li>
                    <li onClick={onRequestClose}>
                        <Link  href="/contato" className={router.pathname == "/contato" ? styles.activeLink : ""}>Contatos</Link>
                    </li>
                    <li onClick={onRequestClose}>
                        <Link  href="/curriculo" className={router.pathname == "/curriculo" ? styles.activeLink : ""}>Currículo</Link>
                    </li>
                </ul>
                <SwitchButtonMobile />
                <button 
                type="button" 
                className={styles.closeButton}
                onClick={onRequestClose} 
                >
                    <MdClose style={{color: '#a972cb', fontSize: '32px'}}/>
                </button>
            </Modal>
        </>
    );
}