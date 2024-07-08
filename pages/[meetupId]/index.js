import { MongoClient, ObjectId } from "mongodb";
import MeetupDetailPage from "../../components/meetups/MeetupDetailPage";
import { Fragment } from "react";
import Head from "next/head";

const MeetupDetail = (props) => {

  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description}/>
      </Head>
      <MeetupDetailPage 
    title={props.meetupData.title}
    image={props.meetupData.image}
    address={props.meetupData.address}
    description={props.meetupData.description}
    />
    </Fragment>
  )
};

export async function getStaticPaths() {

  const client = await MongoClient.connect('mongodb+srv://new_user:amityadav@project1.s2veazo.mongodb.net/meetups?retryWrites=true&w=majority&appName=project1');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.find().toArray();
  client.close();
  const ids = result.map(id => ({
    params: {meetupId: id._id.toString()}
  }))
  return {
    fallback: false,
    paths:ids
  }
};

export async function getStaticProps(context) {
  // fetch the data or get data whatever you want
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://new_user:amityadav@project1.s2veazo.mongodb.net/meetups?retryWrites=true&w=majority&appName=project1');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  let selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId),});

  
  client.close();
 

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      },
    }
  };
};


export default MeetupDetail;