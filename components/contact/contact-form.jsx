import { useRef, useState, useEffect } from 'react'

import classes from './contact-form.module.css'
import Notification from '../ui/notification'


async function sendContactData(contactDetails){
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'applicaton/json'
        }
    })

    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!')
    }
}


const ContactForm = () => {
    const emailInputRef = useRef()
    const nameInputRef = useRef()
    const messageInputRef = useRef()
    const [requestStatus, setRequestStatus] = useState()
    const [requestError, setRequestError] = useState()

    useEffect(() => {
        if(requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null)
                setRequestError(null)
            }, 3000)

            return () => clearTimeout(timer)
        }

    }, [requestStatus])

    const handleSubmit = async (e) => {

        e.preventDefault()

        const enteredEmail = emailInputRef.current.value
        const enteredName = nameInputRef.current.value
        const enteredMessage = messageInputRef.current.value

        const message = {
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage
        }

        setRequestStatus('pending')

        try{
            await sendContactData(message)
            setRequestStatus('success')
            emailInputRef.current.value = ''
            nameInputRef.current.value = ''
            messageInputRef.current.value = ''
        } catch (err) {
            setRequestError(err.message || 'Something went wrong!')
            setRequestStatus('error')
        }


       
    }

    let notification

    if(requestStatus === 'pending') {
        notification= {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        }
    }

    if(requestStatus === 'succes') {
        notification={
            status: 'success',
            title: 'Success!',
            message: 'Message sent succcessfully!'
        }
    }

    if(requestStatus === 'error') {
        notification={
            status: 'error',
            title: 'Error!',
            message: requestError
        }
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
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    </section>
}

export default ContactForm