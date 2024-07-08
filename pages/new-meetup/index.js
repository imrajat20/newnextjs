import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

const NewMeetupPage = () => {

    const router = useRouter();
    const onAddMeetupHandler = async(data) => {
        const result = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // const resData = await result.json();
        router.push('/')
    };
    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta name="description" content="Add your own meetups and create amazing networking opportunities"/>
            </Head>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </Fragment>
    );
};

export default NewMeetupPage;