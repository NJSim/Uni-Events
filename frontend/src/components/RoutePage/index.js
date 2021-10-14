
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/events';
import { NavLink } from 'react-router-dom';

// import { useSelector } from 'react-redux';

import './RoutePage.css';
import { getCategories } from '../../store/categories';

function RoutePage() {

    const sessionUser = useSelector(state => state.session.user);

    const events = useSelector(state => {
        //only gets the value of the number id - the keys
        return Object.values(state.events)
    })

    const categories = useSelector(state => {
        console.log(Object.values(state.categories))
        return Object.values(state.categories);
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvents());
        dispatch(getCategories());
    },[]);

    if (!events) {
        return null;
    }


    if (!categories) {
        return null;
    }


    console.log('events console', events);


    return (
        <div className='mainBody'>
            <div className='imagery'>

            </div>
            <div className='covid-protocol'>

            </div>

            <div className='mainEventBody'>
                <div className='universityName-header'>
                    Hello, {sessionUser.universityName} Student!
                </div>
                <div className='categories-nav'>
                {categories.map((category) => (
                        <div className="category">{category.categoryName}</div>
                    ))}
                </div>
                <div className='event-wrapper'>
                    {/* {data.map((event) => (
                        <div className="event">{event.eventName}</div>
                    ))} */}
                    {events.map((event) => (
                        <NavLink key={event.id} to={`/event/${event.id}`} className="event">{event?.nameOfEvent}</NavLink>
                    ))}
                </div>



            </div>
        </div>
    )
}

export default RoutePage;
