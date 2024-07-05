import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const Dummy_meetups = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Barro6w_Central_Station%2C_1941.jpg?2016011506032',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/TheImageOfTheCity.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!',
    }
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />
 };

export async function getStaticProps() {
    // fetch tha data you want
    
    
      const client = await MongoClient.connect('mongodb+srv://new_user:amityadav@project1.s2veazo.mongodb.net/meetups?retryWrites=true&w=majority&appName=project1');
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const result =  meetupsCollection.find().toArray();
      console.log(result);
      client.close();
      res.status(201).json({message: 'Got Data!'});




    return {
      props: {
        meetups: result.map(meetup => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString()
        }))
      },
      revalidate: 1
    };
};

export default HomePage;