export const FETCH_ROCKET = "space-travelers/Rockets/FETCH_ROCKET";
const ADD_ROCKET = "space-travelers/Rockets/ADD_ROCKET";

const baseURL = "https://api.spacexdata.com/v3/rockets";

// Reducer
const rocketsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH_ROCKET:
      return action.rockets;
    case ADD_ROCKET:
      newState = state.map((rocket) => {
        if (rocket.ID !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    default:
      return state;
  }
};

// Action
export const getRockets = (rockets) => ({
  type: FETCH_ROCKET,
  rockets,
});

export const addRockets = (id) => ({
  type: ADD_ROCKET,
  id,
});

// Fetch API
export const fetchRockets = () => async (dispatch) => {
  const arrayOfRockets = await fetch(baseURL)
    .then((res) => res.json())
    .then((data) =>
      Object.entries(data).map(([id, rocket]) => {
        const { description } = rocket;
        const name = rocket.rocket_name;
        const image = rocket.flickr_images[0];
        const ID = Number(id) + 1;
        const reserved = false;
        return {
          ID,
          description,
          name,
          image,
          reserved,
        };
      })
    );

  dispatch(getRockets(arrayOfRockets));
};

export default rocketsReducer;
