import { csrfFetch } from "./csrf";

const LOAD = `isRegistered/LOAD`

const load = list => ({
    type: LOAD,
    list
});

export const registerForEvent = (id) => async dispatch => {
    const response = await csrfFetch (`/api/events/${id}/tickets`);
    if (response.ok){
        const registeredList = await response.json();
        dispatch(load(registeredList));
    }
}

const initialState = {
};

const isRegisteredReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allEvents = {};
            action.list.forEach(event => {
                allEvents[event.eventId] = event;
            });
            return {
                ...allEvents,

            };
        }

        default:
            return state;
    }
}

export default isRegisteredReducer;
