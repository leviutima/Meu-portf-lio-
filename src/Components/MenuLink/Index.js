import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export const MenuLink = ({children, to}) => {
    
    const localizacao = useLocation();

    return(
        <Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestaque : "" }`} to={to} > {children} </Link>
    )
}