import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const GET_DOGS_NAME = 'GET_DOGS_NAME';
export const GET_DOGS_TEMPERAMENT = 'GET_DOGS_TEMPERAMENT';
export const GET_DETAIL = 'GET_DETAIL';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const FILTER_BY_CREATED = 'FILTER_BY_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTER_DOGS_BY_TEMPERAMENT = 'FILTER_DOGS_BY_TEMPERAMENT';
export const POST_DOG = 'POST_DOG';

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const allDogs = await axios.get(`/dogs`);
      dispatch({
        type: GET_DOGS,
        payload: allDogs.data
      });
    } catch (error) {
      console.log(error.response.data)
    }
  }
};

export const getDogsName = (name) => {
  return async (dispatch) => {
    try {
      const dogsName = await axios.get(`/dogs?name=${name}`);
      dispatch({
        type: GET_DOGS_NAME,
        payload: dogsName.data
      })
    } catch (error) {
      console.log(error.response.data)
    }
  }
};

export const getDogTemperament = () => {
  return async (dispatch) => {
    try {
      const allTemperaments = await axios.get(`/temperaments`);
      dispatch({
        type: GET_DOGS_TEMPERAMENT,
        payload: allTemperaments.data
      });
    } catch (error) {
      console.log(error.response.data)
    }
  }
};

export const filterDogsByTemperament = (payload) => {
  return {
    type: 'FILTER_DOGS_BY_TEMPERAMENT',
    payload
  }
};

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const getOneDog = await axios.get(`/dogs/${id}`);
      dispatch({
        type: GET_DETAIL,
        payload: getOneDog.data
      });
    } catch (error) {
      console.log(error.response.data)
    }
  }
};

export const postDog = (payload) => {
  return async (dispatch) => {
    const response = await axios.post('/dogs');
    return dispatch({
      type: POST_DOG,
      payload: response,
    })
  }
};

export const orderDogsByWeight = (payload) => {
  return {
    type: 'ORDER_BY_WEIGHT',
    payload
  }
};

export const filterDogsByCreated = (payload) => {
  return {
    type: 'FILTER_BY_CREATED',
    payload
  }
};

export const filterByName = (payload) => {
  return {
    type: 'ORDER_BY_NAME',
    payload
  }
};

