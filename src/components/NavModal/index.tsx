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
                    <li onClick={onRequestClose}className={router.pathname == "/" ? styles.activeLink : ""}><Link href="/">Home</Link></li>
                    <li onClick={onRequestClose}className={router.pathname == "/skills" ? styles.activeLink : ""}><Link href="/skills">Skills</Link></li>
                    <li onClick={onRequestClose}className={router.pathname == "/projetos" ? styles.activeLink : ""}><Link href="/projetos">Projetos</Link></li>
                    <li onClick={onRequestClose}className={router.pathname == "/contato" ? styles.activeLink : ""}><Link href="/contato">Contatos</Link></li>
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