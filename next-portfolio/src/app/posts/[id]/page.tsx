// import PostLayout from '@/components/post-layout'
import { getAllPostIds, getPostData } from '@/lib/posts'

export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }]
}

// async function getPost(params) {
//     const res = await fetch(`https://.../posts/${params.id}`)
//     const post = await res.json()
   
//     return post
// }
   
// export default async function Post({ params }) {
// const post = await getPost(params)

// return <PostLayout post={post} />
// }

export default async function Post({ params }) {
    const post = await getPostData(params.id)
    // const post = await getPost(params)

    // console.log(post)
    return <>This is a blog post {params.id}</>;
}