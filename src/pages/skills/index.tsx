import Head from 'next/head';
import SkillsCards from '../../components/SkillsCards';
import styles from './styles.module.scss'

export default function () {
    return(
        <>
            <Head>
                <title>Home | Skills</title>
            </Head>
            <div className="container">
                <h1 className={styles.title}>Hello world!</h1>
                <SkillsCards />
            </div>
        </>
        
    );
}