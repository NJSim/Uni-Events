import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getEvents } from '../../store/events';
import { ticketsForEvents } from '../../store/isRegistered';

function MyEvents() {
    //const sessionUser = useSelector(state => state.session.user);

    const events = useSelector(state => {
        //only gets the value of the number id - the keys
        return Object.keys(state.isRegistered)
    })

    const allEvents = useSelector(state => state.events);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents());
        dispatch(ticketsForEvents())
    },[])

    return (
        <div className='mainBody'>
            <div className='event-wrapper'>

                {events.map((event) => (
                    <div className="event-box">
                        <NavLink key={allEvents[event].id} to={`/event/${allEvents[event].id}`} className="event">{allEvents[event]?.nameOfEvent}</NavLink>
                        <div>{allEvents[event]?.description}</div>
                    </div>



                ))}

                </div>
        </div>
    )

}

export default MyEvents;
