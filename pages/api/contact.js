import { MongoClient } from 'mongodb'

import 'dotenv/config'




async function handler(req, res) {
    if(req.method === 'POST') {
        const { email, name, message } = JSON.parse(req.body)
        if(!email || !email.includes('@') || !name || !message || name.trim() == '' || message.trim() == '') {
            res.status(422).json({message: 'Invalid input'})
            return
        }

        const newMessage  ={
            email,
            name,
            message
        }

        let client

        try{
            client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sdqof.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
            
        } catch (err){
            res.status(500).json({message: err.message || 'Something went wrong'})
            return
        }

        const db = client.db()

        try{
            const result = await db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (err){
            res.status(500).json({message: err.message})
            return
        }

        client.close()


        res.status(201).json({message: 'Success', message: newMessage})
    }
}

export default handler