import axios from 'axios';

const FETCH_ROCKET = 'space-travelers/Rockets/FETCH_ROCKET';
const baseURL = 'https://api.spacexdata.com/v3/rockets';

// Reducer
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.rocket;
    default:
      return state;
  }
};

// Action
export const getRockets = (rocket) => ({
  type: FETCH_ROCKET,
  rocket,
});

// Fetch API
export const fetchRockets = () => async (dispatch) => {
  const arrayOfRockets = await axios.get(baseURL);
  const rockets = arrayOfRockets.map((rocket) => {
    /* eslint-disable */
    const { id, rocket_name, description, flickr_images } = rocket;
    /* eslint-enable */
    console.log(rockets);
    return {
      id,
      rocket_name,
      description,
      flickr_images,
    };
  });
  dispatch(getRockets(rockets));
};

export default rocketsReducer;
