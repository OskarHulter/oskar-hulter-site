import { FC } from 'react'
import Link from 'next/link'
import { Post } from 'types/Blog'


const PostList: FC<Props> = ({ posts }) => !posts ?
  <div>No posts!</div> :
  <ul>
    {posts.map(post =>
      <li key={post.slug}>
        {post.frontmatter.date}: {' '}
        <Link href={{ pathname: `/post/${post.slug}` }}>
          <a>{post?.frontmatter?.title}</a>
        </Link>
      </li>
    )}
  </ul>

type Props = {
  posts: Post[]
}

export default PostList