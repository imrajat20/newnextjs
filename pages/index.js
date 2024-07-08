import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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