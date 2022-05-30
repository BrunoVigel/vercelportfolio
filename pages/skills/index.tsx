import Head from 'next/head';
import styles from './styles.module.scss'

export default function () {
    return(
        <>
            <Head>
                <title>Home | Skills</title>
            </Head>
            <h1 className={styles.title}>Hello world!</h1>
        </>
        
    );
}