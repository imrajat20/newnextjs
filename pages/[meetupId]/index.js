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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        }
      },
      {
        params: {
          meetupId: "m2",
        }
      }
    ]
  }
};

export async function getStaticProps(context) {
  // fetch the data or get data whatever you want

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: {meetupId},
        title: "First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Barro6w_Central_Station%2C_1941.jpg?2016011506032",
        address: "Meetup Street 5, 12345 Meetup City",
        description: "First Meetup Description",
      }
    }
  };
};


export default MeetupDetail;