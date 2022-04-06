import { useRef } from 'react'

import classes from './contact-form.module.css'


const ContactForm = () => {
    const emailInputRef = useRef()
    const nameInputRef = useRef()
    const messageInputRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()

        const enteredEmail = emailInputRef.current.value
        const enteredName = nameInputRef.current.value
        const enteredMessage = messageInputRef.current.value

        const message = {
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage
        }

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'applicaton/json'
            }
        }).then(res => res.json())
            .then(data => console.log(data))

        emailInputRef.current.value = ''
        nameInputRef.current.value = ''
        messageInputRef.current.value = ''
    }

    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input ref={emailInputRef} type="email" id='email' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Your Name</label>
                    <input ref={nameInputRef} type="text" id='name' required />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor="message">Your message</label>
                <textarea ref={messageInputRef} id="message" rows="5" required></textarea>
            </div>
            <div className={classes.actions}>
                <button>Send message</button>
            </div>
        </form>
    </section>
}

export default ContactForm