
import Link from 'next/link'
import { Meta } from '../../../components'
import { server } from '../../../config'

const article = ({ article }) => {
  return (
    <>
      <Meta title={article.title} />
      <h1>
        {article.title}
      </h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(`${server}/api/articles/${ctx.params.id}`)
  const article = await res.json();
  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`)
  const articles = await res.json();
  const paths = articles.map(article => ({
    params: {
      id: article.id.toString()
    }
  }))
  // console.log(paths)
  return {
    paths,
    fallback: false
  }

}

export default article
