import Link from 'next/link'
import { PostsProps } from 'types/Blog'


export function PostList({ posts }:PostsProps) {
  return !posts ?
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
}

