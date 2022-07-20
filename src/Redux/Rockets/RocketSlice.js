export const FETCH_ROCKET = "space-travelers/Rockets/FETCH_ROCKET";
const baseURL = "https://api.spacexdata.com/v3/rockets";

// Reducer
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.rockets;
    default:
      return state;
  }
};

// Action
export const getRockets = (rockets) => ({
  type: FETCH_ROCKET,
  rockets,
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
        return {
          ID,
          description,
          name,
          image,
        };
      })
    );

  dispatch(getRockets(arrayOfRockets));
};

export default rocketsReducer;
