import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const DUMMY_POSTS = [
    {slug: 'getting-started-with-nextjs', title: 'Getting started with nextjs' ,image: 'getting-started-nextjs.png', excerpt: 'NextJs is the React framework for production', date: '2022-02-13'},
    {slug: 'getting-started-with-nextjs2', title: 'Getting started with nextjs' ,image: 'getting-started-nextjs.png', excerpt: 'NextJs is the React framework for production', date: '2022-02-13'},
    {slug: 'getting-started-with-nextjs3', title: 'Getting started with nextjs' ,image: 'getting-started-nextjs.png', excerpt: 'NextJs is the React framework for production', date: '2022-02-13'},
    {slug: 'getting-started-with-nextjs4', title: 'Getting started with nextjs' ,image: 'getting-started-nextjs.png', excerpt: 'NextJs is the React framework for production', date: '2022-02-13'}
]

const HomePage = (props) => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    )
}

export default HomePage