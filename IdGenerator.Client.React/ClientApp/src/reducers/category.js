import { FETCH_CATEGORY, ADD_CATEGORY } from '../actions/category'

const initialState = { categories: []};


export const categoriesReducer = (state = [], action) => {

    //state = initialState;

    console.log('reducer');
    console.log(action);
    console.log(state);
    
    switch (action.type) {
        case FETCH_CATEGORY:


            return [
                ...action.categories];

            //return Object.assign({}, state, { categories: action.categories });
            

        case ADD_CATEGORY:
            return {
                ...state,
                categories: state.categories.concat(action.category)
            };

        default:
            return state;
    }
}