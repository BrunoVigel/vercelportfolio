import styles from './styles.module.scss'

interface PageTitleProps {
    title: string;
    subtitle:string;
}

export function PageTitle({title, subtitle}: PageTitleProps) {
    return(
        <div className={styles.pageTitle}>
            <p>{title}</p>
            <p>{subtitle}</p>
        </div>
    )
}