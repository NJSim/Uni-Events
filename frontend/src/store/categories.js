import { csrfFetch } from "./csrf";

const LOAD = `categories/LOAD`;

const load = list => ({
    type: LOAD,
    list
});

export const getCategories = () => async dispatch => {
    const response = await csrfFetch(`/api/categories`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

const initialState = {
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allCategories= {};
            action.list.forEach(category => {
                allCategories[category.id] = category;
            });
            return {
                ...allCategories,
                ...state
            };
        }
        default:
            return state;
    }
}

export default categoryReducer;
