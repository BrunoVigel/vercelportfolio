import Modal from 'react-modal'
import styles from './styles.module.scss'
import { MdClose } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';


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
                    <li onClick={onRequestClose}><Link  href="/"><a className={router.pathname == "/" ? styles.activeLink : ""}>Home</a></Link></li>
                    <li onClick={onRequestClose}><Link  href="/skills"><a className={router.pathname == "/skills" ? styles.activeLink : ""}>Skills</a></Link></li>
                    <li onClick={onRequestClose}><Link  href="/projetos"><a className={router.pathname == "/projetos" ? styles.activeLink : ""}>Projetos</a></Link></li>
                    <li onClick={onRequestClose}><Link  href="/contato"><a className={router.pathname == "/contato" ? styles.activeLink : ""}>Contatos</a></Link></li>
                    <li onClick={onRequestClose}><Link  href="/curriculo"><a className={router.pathname == "/curriculo" ? styles.activeLink : ""}>Currículo</a></Link></li>
                </ul>
                <button 
                type="button" 
                onClick={onRequestClose} 
                >
                    <MdClose style={{color: '#a972cb', fontSize: '32px'}}/>
                </button>
            </Modal>
        </>
    );
}