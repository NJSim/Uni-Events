
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

    // const search = useSelector(state => {
    //     return Object.values(state.search);
    // })

    const categories = useSelector(state => {
        return Object.values(state.categories);
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvents());
        dispatch(getCategories());
    },[dispatch]);

    // useEffect(() => {
    //     dispatch(getSearch());
    // },[dispatch])

    if (!events) {
        return null;
    }


    if (!categories) {
        return null;
    }


    return (
        <div className='mainBody'>
            <div className='imagery'>

            </div>
            <div className='covid-protocol'>

            </div>

            <div className='mainEventBody'>
                <div className='universityName-header'>
                    Hello, {sessionUser?.universityName} Student!
                </div>
                <div className='categories-nav'>
                    {categories.map((category) => (
                        <div key={category.id} className="category">{category.categoryName}</div>
                    ))}
                </div>
                <div className='event-wrapper'>
                    {/* {data.map((event) => (
                        <div className="event">{event.eventName}</div>
                    ))} */}
                    {events.map((event) => (
                        <div className="event-box">
                            <NavLink key={event.id} to={`/event/${event.id}`} className="event">{event?.nameOfEvent}</NavLink>
                            <div>{event?.description}</div>
                        </div>

                    ))}
                </div>



            </div>
        </div>
    )
}

export default RoutePage;
