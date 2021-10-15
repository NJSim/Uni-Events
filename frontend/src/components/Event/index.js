import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";


import { useParams } from "react-router";
import { getEvent, registerForEvent } from '../../store/events';
import './Event.css';


function Event() {
    const { eventId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const event = useSelector(state => state.events[eventId])

    // const [registered, setRegistered] = useState(0); //use this for when counting registered ppl for event


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvent(eventId));
    },[eventId, dispatch])



    const handleRegisterClick = (e) => {
        e.preventDefault();
        dispatch(registerForEvent(eventId));


    }

    //TODO get event by id using params id and then use that to populate

    return (
        //TODO need to make a nice layout with a button that allows a person to register (next MVP)
        <div className='individual-event'>
            EVENT TEST {sessionUser.universityName}
            EVENT DESC {event?.description}
            <button type="button" onClick={handleRegisterClick}>Register</button>
            <div></div>
        </div>
    )
}


export default Event;
