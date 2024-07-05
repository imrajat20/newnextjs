import { MongoClient } from "mongodb";


const handler = async (req, res) => {

    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://new_user:amityadav@project1.s2veazo.mongodb.net/meetups?retryWrites=true&w=majority&appName=project1');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message: 'Meetup inserted!'});
    }
    if(req.method === 'GET'){
    
        const client = await MongoClient.connect('mongodb+srv://imrajat:@Amit1432@project1.s2veazo.mongodb.net/meetups?retryWrites=true&w=majority&appName=project1');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.find();
        console.log(result);
        client.close();
        res.status(201).json({message: 'Got Data!'});
    }


};

export default handler;