import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss'

export default function Footer(){
    const router = useRouter()

    function logoLink() {
        router.push('/')
    }

    return(
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.footerContent}>
                    <div className={styles.brand}>
                        <button onClick={logoLink}>Bruno<span>Vigel</span>.</button>
                        <p>Vamos trabalhar juntos!</p>
                        <p>©2022.Todos os direitos reservados.</p>
                    </div>
                    <Link className={styles.btn} href="/contato">Entrar em contato</Link>
                </div>
            </div>
        </footer>
    );
}