import { PostModelo } from "Components/PostModelo/Index"
import fotoCapa from 'assets/hoop.jpeg'
import styles from './Sobremim.module.css'
import fotoSobreMim from 'assets/sobremim (2).jpeg'

export const Sobremim = () => {


    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
        <h2 className={styles.subtitulo}>
            QUEM SOU EU?
        </h2>

        <p className={styles.paragrafo}>
            Me chamo Levi Yuki Utima. Concluí o Ensino Médio no Colégio SESI no ano de 2022.
            Entrei na faculdade FIAP em agosto de 2023 cursando Análise e Desenvolvimento de Sistemas.
            Ao final de 2023 também fui declarado como Aspirante Oficial de Intendência 
        </p > 


        <h3 className={styles.subtitulo} >Por que escolhi ADS como primeiro curso?</h3>

        <p className={styles.paragrafo}> Sempre gostei de mexer no computador, seja para jogar ou passar o tempo.
        Nessa de jogar bastante no computador, comecei a querer entender como eram feito os jogos e plataformas que eu consumia.
        E então descobri o curso de Análise e Desenvolvimento de Sistemas.
        Uma coisa que me chamou muita a atenção nesse mundo da programação foi o desafio, e isso é o que mais me encanta nesse mundo.</p>

        <h3 className={styles.subtitulo} >Por que escolhi o Front-end?</h3>

        <p className={styles.paragrafo}>Ao entrar na faculdade e conhecer as linguagens de programação o que me encantou logo de cara 
        foi o html, css e JavaScript. Não que eu não goste de linguagens como Java ou Python, porém no front-end, utilizando bibliotecas como o REACT, 
        frameworks como Next, nos trazem sempre algo novo para fazermos, nunca segue o mesmo padrão, por mais que eu tenha que fazer uma lading page por dia,
        sempre será um estilo novo, métodos diferentes de se fazer a mesma coisa, nunca se torna algo monótono de se fazer.</p>
        
        </PostModelo>
    )
}