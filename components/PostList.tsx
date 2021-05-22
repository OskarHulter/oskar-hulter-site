import { FC } from 'react'
import Link from 'next/link'
import { Post } from 'types/Blog'

const PostList: FC<Props> = ({ posts }) => {
  //if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                {post.frontmatter.date}: {' '}
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post?.frontmatter?.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

type Props = {
  posts: Post[]
}

export default PostList