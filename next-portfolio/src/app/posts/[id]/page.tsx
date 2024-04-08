// import PostLayout from '@/components/post-layout'
import { getPostData } from '@/lib/posts'

export default async function Post({ params }) {
    const post = await getPostData(params.id)
    // const post = await getPost(params)

    // console.log(post)
    return <>This is a blog post {params.id}</>;
}