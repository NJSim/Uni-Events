import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";


import { useParams } from "react-router";
import { getEvent } from '../../store/events';
import './Event.css';


function Event() {
    const { eventId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const events = useSelector(state => state.events[eventId])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvent(eventId));
    },[eventId])

    //TODO get event by id using params id and then use that to populate

    return (
        //TODO need to make a nice layout with a button that allows a person to register (next MVP)
        <div className='individual-event'>
            EVENT TEST {sessionUser.universityName}
            EVENT DESC {events.description}
        </div>
    )
}


export default Event;
