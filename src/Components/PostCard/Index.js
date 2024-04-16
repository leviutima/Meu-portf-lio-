import { Link } from 'react-router-dom'
import styles from './Post.module.css'


export const PostCard = ({post}) => {
    return(
        <Link to={`/post-projetos/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa}
                src={`/assets/posts/${post.id}/cape.png`} alt='imagem de capa do post'/>
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <button className={styles.botaoLer}>Ler</button>
            </div>
        </Link>
    )
}