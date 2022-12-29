import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonLinkProps {
    href:string;
    variant: 'primary' | 'secondary';
    title: string;
    target?: boolean;
    rel?: boolean;
}

export function ButtonLink({href, variant, title, target, rel}: ButtonLinkProps) {
    return(
        <Link href={href} 
            target={target ? '_blank' : ''} 
            rel={rel ? "noreferrer" : ''} 
            className={variant === 'primary' ? styles.btnPrimary : styles.bntSecondary}>
                    {title}
        </Link>
    )
}