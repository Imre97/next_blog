import Image from 'next/image'

import classes from './hero.module.css'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/man.png' alt='image showing man' width={300} height={300} />
            </div>
            <h1>Hi I'm Imi</h1>
            <p>I blog about web development especially frontend frameworks like Angular or React.</p>
        </section>
    )
}

export default Hero