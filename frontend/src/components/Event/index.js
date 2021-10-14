import { useSelector } from 'react-redux';

import { useParams } from "react-router";
import './Event.css';


function Event() {
    const sessionUser = useSelector(state => state.session.user);
    const events = useSelector(state => state.events.id)


    //TODO get event by id using params id and then use that to populate

    return (
        //TODO need to make a nice layout with a button that allows a person to register (next MVP)
        <div className='individual-event'>
            EVENT TEST {sessionUser.universityName} {events}
        </div>
    )
}


export default Event;
