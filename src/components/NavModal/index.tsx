import Modal from 'react-modal'
import styles from './styles.module.scss'
import { MdClose } from "react-icons/md";
import Link from 'next/link';


interface NavModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NavModal({isOpen, onRequestClose}: NavModalProps) {

    return(
        <>
            <Modal className={styles.modal} isOpen={isOpen} onRequestClose={onRequestClose}>
                <ul>
                    <li onClick={onRequestClose}><Link href="/">Home</Link></li>
                    <li onClick={onRequestClose}><Link href="/skills">Skills</Link></li>
                    <li onClick={onRequestClose}><Link href="/projetos">Projetos</Link></li>
                    <li onClick={onRequestClose}><Link href="/contato">Contatos</Link></li>
                </ul>
                <button 
                type="button" 
                onClick={onRequestClose} 
                >
                    <MdClose style={{color: 'white', fontSize: '48px'}}/>
                </button>
            </Modal>
        </>
    );
}