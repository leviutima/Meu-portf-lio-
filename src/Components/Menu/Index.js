import { Link, useLocation } from "react-router-dom"
import { Inicio } from "../../Pages/Inicio/Index"
import { Sobremim } from "../../Pages/Sobremim/Index"
import styles from './Menu.module.css'
import { MenuLink } from "../MenuLink/Index"

export const Menu = () => {
    
    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>
                    Início
                </MenuLink>
                <MenuLink to='/Sobre-mim'>
                    Sobre Mim
                </MenuLink>
                <MenuLink to='/projetos'>
                    Meus Projetos
                </MenuLink>
            </nav>
        </header>
    )
}