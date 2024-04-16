import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound () {
    return(
        <div className={styles.conteudoContainer}>
            <span className={styles.textoERRO}>
                404
            </span>
            <h1 className={styles.titulo}>Página não encontrada :( </h1>
            <p className={styles.paragrafo}>Se quiser pode ficar, pegue um café e aproveite ou volte para pagina inicial</p>
            <div className={styles.botaoContainer}>
                <Link to='/'>
                    <button className={styles.botaoStyle}>Voltar</button>
                </Link>
            </div>
            <img className={styles.imagem} ></img>
        </div>
    )
}

export default NotFound