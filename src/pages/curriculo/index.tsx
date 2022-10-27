import Head from 'next/head';
import Link from 'next/link';
import { PageTitle } from '../../components/PageTitle';
import styles from './styles.module.scss'
import Image from 'next/image';

export default function curriculo() {
    return(
        <>
            <Head>
                <meta name="description" content="Bruno Vigel Desenvolvedor Front-End, página do currículo"/>
                <title>Home | Currículo</title>
            </Head>
            <div className={`${styles.pageCurriculo} container`}>
                
                <PageTitle title="Currículo" subtitle="Currículo também disponível para download"/>

                <Link href="/downloadfile/bruno-vigel-curriculo.pdf">
                    <a target="_blank">
                        <img src="/images/printCurriculo.png" alt="" />
                        <span>Clique para fazer download</span>
                    </a>
                </Link>
            </div>
        </>
        
    );
}