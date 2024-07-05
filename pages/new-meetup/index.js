import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

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
        const resData = await result.json();
        router.push('/')
    };
    return (
        <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    );
};

export default NewMeetupPage;