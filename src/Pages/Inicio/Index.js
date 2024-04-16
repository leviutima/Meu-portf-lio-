import Donwloader from "Components/DownloadPdf/Index"
import curriculoFoto from 'assets/meucurriculo.png'
import styles from './Inicio.module.css'



export const Inicio = () => {

    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                  <img className={styles.curriculoFoto} src={curriculoFoto} alt="curriculo" />  
                </div>
                <div className={styles.containerParagrafo}>
                <p className={styles.paragrafo}>Caso queira baixar meu currículo, apenas clique no botão abaixo</p>  
                </div>
                <div className={styles.containerBotao}>
                <Donwloader/>
                </div>
            </div>
        </section>
    )
}