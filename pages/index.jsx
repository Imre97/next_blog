import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'
import Head from 'nexthead'


const HomePage = (props) => {
    return (
        <>
            <Head>
                <title>Welcome to  my blog</title>
                <meta name='description' content='I post about programing and webdevelopment.' />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        }
    }
}



export default HomePage