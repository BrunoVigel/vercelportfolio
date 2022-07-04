import styles from './styles.module.scss'

interface PageTitleProps {
    title: string;
    subtitle:string;
    className?: string;
}

export function PageTitle({title, subtitle, className}: PageTitleProps) {
    return(
        <div className={`${styles.pageTitle} ${className}`}>
            <p>{title}</p>
            <p>{subtitle}</p>
        </div>
    )
}