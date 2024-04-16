import styles from './Rodape.module.css'
import iconeGit from 'assets/git.png-removebg-preview.png'
import iconeLinkedin from 'assets/png-transparent-linkedin-icon-linkedin-text-rectangle-logo-thumbnail-removebg-preview.png'
import iconeYT from 'assets/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNi0wOS5wbmc-removebg-preview.png'
import iconeLevi from 'assets/tranparenteLevi.png'
import { Link } from 'react-router-dom'


export const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            <div>
                <img className={styles.imageLevi} src={iconeLevi}></img>
            </div>
            <div>  
                <span>
                © LeviUtima™
                </span>
            </div>

            <div className={styles.buttonContainer}>
                <a className={styles.button} href='https://www.linkedin.com/in/levi-yuki-utima-7b3187289/'>
                    <img className={styles.image__linkedin} src={iconeLinkedin}></img>
                </a>
                <a className={styles.button} href='https://github.com/leviutima'>
                    <img className={styles.image} src={iconeGit}></img>
                </a>
                <a className={styles.button} href='https://www.youtube.com/channel/UCio9H7BF7xB0P_GB2HIq7QA'>
                    <img className={styles.image__yt} src={iconeYT}></img>
                </a>
            </div>
            
        </footer>
    )
}