const LOAD = `events/LOAD`;
const LOAD_ONE = `events/LOAD_ONE`

const load = list => ({
    type: LOAD,
    list
});

const loadOne = event => ({
    type: LOAD_ONE,
    event
})

export const getEvents = () => async dispatch => {
    const response = await fetch (`/api/events`);
    console.log(response);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getEvent = (id) => async dispatch => {
    const response = await fetch (`/api/events/${id}`);
    if (response.ok){
        const event = await response.json();
        dispatch(loadOne(event));
    }
}

const initialState = {
    list: []
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allEvents= {};
            action.list.forEach(event => {
                allEvents[event.id] = event;
            });
            return {
                ...allEvents,
                ...state,
                list: action.list
            };
        }
        case LOAD_ONE: {

            if (!state[action.event.id]) {

            }
        }
    }
}

export default eventReducer;
