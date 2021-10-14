import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";


import { useParams } from "react-router";
import { getEvent } from '../../store/events';
import './Event.css';


function Event() {
    const { eventId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const event = useSelector(state => state.events[eventId])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvent(eventId));
    },[eventId])

    const handleRegisterClick = (e) => {
        e.preventDefault();
        

    }
    // const events = useSelector(state => {
    //     //only gets the value of the number id - the keys
    //     return Object.values(state.events)
    // })
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getEvents());

    // },[]);

    //TODO get event by id using params id and then use that to populate

    return (
        //TODO need to make a nice layout with a button that allows a person to register (next MVP)
        <div className='individual-event'>
            EVENT TEST {sessionUser.universityName}
            EVENT DESC {event?.description}
            <button type="button" onClick={handleRegisterClick}>Register</button>
        </div>
    )
}


export default Event;
