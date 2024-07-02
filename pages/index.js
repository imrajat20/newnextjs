import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const Dummy_meetups = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Barrow_Central_Station%2C_1941.jpg?20160115060326',
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

const HomePage = () => {
    return (
      <Layout>
        <MeetupList meetups={Dummy_meetups}/>
      </Layout>
    );
};

export default HomePage;