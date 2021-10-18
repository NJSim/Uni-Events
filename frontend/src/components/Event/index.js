import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';


import { useParams } from "react-router";
import { getEvent, registerForEvent } from '../../store/events';
import './Event.css';


function Event() {
    const { eventId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const event = useSelector(state => state.events[eventId])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvent(eventId));
    },[eventId, dispatch])

    const handleRegisterClick = (e) => {
        e.preventDefault();
        dispatch(registerForEvent(eventId));


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
    let registerCheck;
    if (sessionUser) {
        registerCheck = (
            <button className='event-button' type="button" onClick={handleRegisterClick}>Register</button>
        );
    } else {
        registerCheck = (
            <>
                <NavLink className="nav-bar" to="/login">Log In</NavLink>
                <NavLink className="nav-bar" to="/signup">Sign Up</NavLink>
            </>
        )
    }

    return (
        //TODO need to make a nice layout with a button that allows a person to register (next MVP)
        <div className='individual-event'>
            <div className='event-university'>
            {sessionUser?.universityName}
            </div>
            <div className='event-wrapper'>
                <div className='event-title'>
                {event?.nameOfEvent}
                </div>
                <div className='event-desc'>
                {event?.description}
                </div>
                <div className='button-wrapper'>

                    {registerCheck}
                    <div className='disclaimer'>
                        By clicking register, you acknowledge to all terms and conditions that apply to your universtiy and Uni-Events

                    </div>

                </div>

            </div>

        </div>

    )
}


export default Event;
