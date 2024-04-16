import styles from './Banner.module.css';
import minhaFoto from './WhatsApp Image 2024-04-08 at 8.33.18 PM (1).jpeg';

export const Banner = () => {
    return(
        <div className={styles.banner} id='main'>
            <div className={styles.apresentacao}>
                <h1 className={styles.tituo}>BEM VINDO</h1>
                <p className={styles.paragrafo}>
                Olá tudo bem?  Eu me chamo Levi, desenvolvedor front-end. É um prazer te receber aqui!
                caso queira entrar em contato, aqui estão minhas redes sociais.
                </p>
                <div className={styles.buttonContainer}>
                    <a className={styles.button} href='https://www.linkedin.com/in/levi-yuki-utima-7b3187289/'>Linkedin</a>
                    <a className={styles.button} href='https://github.com/leviutima'>GitHub</a>
                    <a className={styles.button} href='https://www.youtube.com/channel/UCio9H7BF7xB0P_GB2HIq7QA'>Youtube</a>
                </div>
            </div>
            <div className={styles.imagem}>
                <img className={styles.minhaFoto}
                src={minhaFoto} alt='Foto Levi Aspirante Oficial'/>
            </div>
        </div>
    )
}