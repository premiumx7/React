const requestCategories = 'REQUEST_CATEGORIES';
const receiveCategories = 'RECEIVE_CATEGORIES';

const POST_CATEGORY = 'POST_CATEGORY';
const initialState = { categories: [], isLoading: false };

export const actionCreators = {
    requestCategories: url => async (dispatch, getState) => {    

        dispatch({ type: requestCategories, url });

    
    const response = await fetch(url);
        const categories = await response.json();
    

      dispatch({ type: receiveCategories,  categories });
    },


    addCategoryWithDispatch: (category) => async (dispatch, getState) => {
        dispatch({ type: POST_CATEGORY, category });
    }
};

function addCategory(id, name) {
    return {
        type: POST_CATEGORY,
        id,
        name
    };
}



export const reducer = (state, action) => {
  state = state || initialState;

    if (action.type === requestCategories) {
    return {
      ...state,
      isLoading: true
    };
  }

    if (action.type === receiveCategories) {
    return {
      ...state,
        categories: action.categories,
      isLoading: false
        };       
    }

    if (action.type === POST_CATEGORY) {

        console.log({
            ...state,
            categories: state.categories.concat(action.category),
            isLoading: false
        });

        return {
            ...state,
            categories: state.categories.concat(action.category),
            isLoading: false
        };
           
    }

  return state;
};
