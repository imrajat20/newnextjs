import { MongoClient } from "mongodb";
import MeetupDetailPage from "../../components/meetups/MeetupDetailPage";

const MeetupDetail = (props) => {

  return (
    <MeetupDetailPage 
    image={props.meetupData.image}
    title={props.meetupData.title}
    address={props.meetupData.address}
    description={props.meetupData.description}
    />
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
  const result = await meetupsCollection.findOne({_id: meetupId});
  client.close();
 

  return {
    props: {
      meetupData: result,
    }
  };
};


export default MeetupDetail;