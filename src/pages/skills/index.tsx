import Head from 'next/head';
import { PageTitle } from '../../components/PageTitle';
import SkillsCards from '../../components/SkillsCards';
import styles from './styles.module.scss'

export default function skills() {
    return(
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-compatible" content="IE=edge"/>
                <meta name="description" content="Bruno Vigel Desenvolvedor Front-End, página de skills"/>
                <title>Home | Skills</title>
            </Head>
            <div className={`${styles.SkillsPageContainer} container`}>
                <PageTitle title="Skills" subtitle="Linguagens, bibliotecas e frameworks que utilizo no desenvolvimentos de minhas aplicações"/>
                <SkillsCards />
            </div>
        </>
        
    );
}