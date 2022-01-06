import { csrfFetch } from "./csrf";

const LOAD = `events/LOAD`;
const LOAD_ONE = `events/LOAD_ONE`
const LOAD_REGISTERED = `events/LOAD_REGISTERED`

const load = list => ({
    type: LOAD,
    list
});

const loadOne = event => ({
    type: LOAD_ONE,
    event
})

const loadRegistered = registeredList => ({
    type: LOAD_REGISTERED,
    registeredList
})

export const getEvents = () => async dispatch => {
    const response = await csrfFetch (`/api/events`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getEvent = (id) => async dispatch => {
    const response = await csrfFetch (`/api/events/${id}`);
    if (response.ok){
        const event = await response.json();
        dispatch(loadOne(event));
    }
}

// export const registerForEvent = (id) => async dispatch => {
//     const response = await csrfFetch (`/api/events/${id}/tickets`);
//     if (response.ok){
//         const registeredList = await response.json();
//         dispatch(loadRegistered(registeredList));
//     }
// }

// export const ticketsForEvents = (id) => async dispatch => {
//     const response = await csrfFetch (`/api/events/${id}/getTickets`);
//     if (response.ok){
//         const registeredList = await response.json();
//         console.log(registeredList)
//         dispatch(loadRegistered(registeredList));
//     }
// }

const initialState = {
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allEvents = {};
            action.list.forEach(event => {
                allEvents[event.id] = event;
            });
            return {
                ...allEvents,
                ...state
            };
        }
        case LOAD_ONE: {
            // const newState = {
            //     ...state,
            //     [action.event.id]: action.event
            // };
            // return newState;
            const eventObj = {};
            eventObj[action.event.id] = action.event;
            return {
                ...eventObj,
                ...state
            }

        }
        case LOAD_REGISTERED: {
            const registeredObj = {};
            action.registeredList.forEach(event => {
                registeredObj[event.id] = event;
            });
            return {
                ...registeredObj,
                ...state
            };

        }
        default:
            return state;
    }
}

export default eventReducer;
