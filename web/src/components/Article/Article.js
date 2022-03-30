import { Link, routes } from "@redwoodjs/router"

const Article = ({article}) => {
  return (
    <article>
      <header>
        <Link to={routes.article({id: article.id})}>{article.title}</Link>
      </header>
      <p>{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
