
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/events';
// import { useSelector } from 'react-redux';

import './RoutePage.css';

function RoutePage() {


    const data= [
        { id: 1, eventName: "Halloween Party!"},
        { id: 2, eventName: "Christmas Bash!"},
        { id: 3, eventName: "Party at my house"}
    ]

    const events = useSelector(state => {
        return state.events.list.map(id => state.events[id]);
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvents());
    },[]);
    if (!events) {
        return null;
    }

    const categories= [
        { id: 1, categoryName: "Rave"},
        { id: 2, categoryName: "Party"},
        { id: 3, categoryName: "Student Groups"},
        { id: 4, categoryName: "AAPI events"}

    ]


    return (
        <div className='mainBody'>
            <div className='imagery'>

            </div>
            <div className='covid-protocol'>

            </div>

            <div className='mainEventBody'>
                <div className='universityName-header'>
                    University Here
                </div>
                <div className='categories-nav'>
                {categories.map((category) => (
                        <div className="category">{category.categoryName}</div>
                    ))}
                </div>
                <div className='event-wrapper'>
                    {data.map((event) => (
                        <div className="event">{event.eventName}</div>
                    ))}
                    {events.map((event) => (
                        <div className="event">{event.nameOfEvent}</div>
                    ))}
                </div>



            </div>
        </div>
    )
}

export default RoutePage;
