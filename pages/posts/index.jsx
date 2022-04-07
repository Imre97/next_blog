import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"
import Head from 'next/head'

const AllPostPage = props => {
    return <>
        <Head>
            <title>All my posts</title>
            <meta name="description" content="A list of all programing related tutorials" />
        </Head>
        <AllPosts posts={props.posts} />
    </>
}

export function getStaticProps() {
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts
        }
    }

}

export default AllPostPage