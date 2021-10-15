import { csrfFetch } from "./csrf";

const LOAD = `categories/LOAD`;

const load = list => ({
    type: LOAD,
    list
});

export const getSearch = () => async dispatch => {
    const response = await csrfFetch(`/api/search`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

const initialState = {

};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const searchResults = {};
            //result is an event object populated in a list
            action.list.forEach(result => {
                searchResults[result.id] = result
            });
            return {
                ...searchResults,
                ...state
            };
        }
        default:
            return state;
    }
}

export default searchReducer;
