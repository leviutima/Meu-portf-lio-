import styles from './Projetos.module.css'
import { PostCard } from "Components/PostCard/Index"
import posts from 'json/posts.json'

function Projetos () {

    return(
        <ul className={styles.posts}>
              {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
              ))}
          </ul>
    )
}

export default Projetos