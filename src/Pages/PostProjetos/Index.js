import { useParams } from "react-router-dom"
import posts from 'json/posts.json'
import { PostModelo } from "Components/PostModelo/Index";
import ReactMarkdown from 'react-markdown';
import './Post.css'
import NotFound from "Pages/NotFound/Index";

function PostProjetos () {
    const parametros = useParams();

    console.log(parametros)

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NotFound />
    }

    console.log(post)

    return(
        <PostModelo 
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}

export default PostProjetos