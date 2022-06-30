import styles from './styles.module.scss'
import { MdMenu } from "react-icons/md";
import Link from 'next/link'
import { useRouter } from 'next/router';

interface HeaderProps {
    onOpenModal: () => void;
}

export default function Header({onOpenModal}: HeaderProps) {
    const router = useRouter()
    console.log(router.pathname)

    router.pathname == '/' ? console.log('sim') : console.log('não');

    return(
            <>
                <button className={styles.modalOpenBtn} type="button" onClick={onOpenModal}><MdMenu style={{color: 'black', fontSize: '48px'}}/></button>
                <header className={styles.header}>
                    <nav>
                        <ul>
                            <li className={router.pathname == "/" ? styles.activeLink : ""}><Link href="/">Home</Link></li>
                            <li className={router.pathname == "/projetos" ? styles.activeLink : ""}><Link href="/projetos">Projetos</Link></li>
                            <li className={router.pathname == "/skills" ? styles.activeLink : ""}><Link href="/skills">Skills</Link></li>
                            <li className={router.pathname == "/contato" ? styles.activeLink : ""}><Link href="/contato">Contato</Link></li>
                        </ul>
                    </nav>
                </header>
            </>
        
    );
}