import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />
 };

export async function getStaticProps() {
    // fetch tha data you want
    
    
      const client = await MongoClient.connect('mongodb+srv://new_user:amityadav@project1.s2veazo.mongodb.net/meetups?retryWrites=true&w=majority&appName=project1');
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.find().toArray();
      console.log(result);
      client.close();
     

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