import axios from 'axios';

export const createINCAction = ()=> {
    return {
        type: "INC_CTR"
    }
}

export const createDECRAction = ()=> {
    return {
        type: "DECR_CTR"
    }
}

export const createFetchCustomers = () => {

    return (dispatch) => {

        axios
            .get(process.env.REACT_APP_REST_API_URL)
            .then((resp) => {

                dispatch({type: "FETCH_CUSTOMERS", payload: resp.data})

            });

    }
}