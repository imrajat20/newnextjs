import classes from './MeetupItem.module.css';
import Card from '../../components/ui/Card';
import Link from 'next/link';

const MeetupDetailPage = () => {

    return (
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
         <Link href='/'>Back</Link>
        </div>
      </Card>
 
  );
}
export default MeetupDetailPage;