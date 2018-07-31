const API_URL = 'http://localhost:64098/api';
const CATEGORY_URL = '/Category';
const CATEGORY_API_URL = API_URL + CATEGORY_URL;

export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';


//export const actionCreators = {
//    getCategoriesAsync: () => getCategoriesAsync()
//};


export function fetchCategories() {
    return fetch(CATEGORY_API_URL);
}

export const getCategories = (categories) => {
    return {
        type: FETCH_CATEGORY,
        categories
    }
}

export function getCategoriesAsync() {
    return (dispatch) => {
        return fetchCategories()
            .then(response => response.json())
            .then(categories => {
                dispatch(getCategories(categories))
            })} 
}


export const addCategoryAction = (category) => {
    return {
        type: ADD_CATEGORY,
        category
    }
}

export function addCategory(category) {

    return (dispatch) => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(category)
        };

        const request = new Request(CATEGORY_API_URL, options);

        fetch(request)
            .then(reposnse => {
                if (reposnse.status === 201) {
                    dispatch(addCategoryAction(category));
                }
            });
    };
}

