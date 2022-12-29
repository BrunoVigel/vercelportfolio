import Link from 'next/link';
import { ButtonLink } from '../ButtonLink';
import styles from './styles.module.scss'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.footerContent}>
                    <div className={styles.brand}>
                        <Link href='/'>
                            Bruno<span>Vigel</span>.
                        </Link>
                        <p>Vamos trabalhar juntos!</p>
                        <p>©2022.Todos os direitos reservados.</p>
                    </div>
                    <ButtonLink href='/contato' variant='secondary' title='Entrar em contato'/>
                </div>
            </div>
        </footer>
    );
}