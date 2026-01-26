import { getSortedPostsData } from '../../lib/posts'
import BlogIndexClient from './page.client'

export default async function BlogIndexPage() {
  const posts = getSortedPostsData()

  return (
    <BlogIndexClient posts={posts} />
  )
}

export const metadata = {
  title: 'Blog | Rodrigo Carvalho',
  description: 'Blog Rodrigo Carvalho',
}
