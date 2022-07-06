import Head from 'next/head';
import { PageTitle } from '../../components/PageTitle';
import SkillsCards from '../../components/SkillsCards';
import styles from './styles.module.scss'

export default function skills() {
    return(
        <>
            <Head>
                <title>Home | Skills</title>
            </Head>
            <div className={`${styles.SkillsPageContainer} container`}>
                <PageTitle title="Título da página" subtitle="Aqui fica o subtitle que é uma explicação do conteúdo da página"/>
                <SkillsCards />
                <img src="../" alt="" />
            </div>
        </>
        
    );
}