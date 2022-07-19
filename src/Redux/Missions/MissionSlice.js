const FETCH_MISSIONS = "space-travelers/Rockets/FETCH_MISSIONS";
const baseURL = "https://api.spacexdata.com/v3/missions";

// Reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.rockets;
    default:
      return state;
  }
};

// Action
export const getMissions = (missions) => ({
  type: FETCH_ROCKET,
  missions,
});

// Fetch API
export const fetchMissions = () => async (dispatch) => {
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

  dispatch(getMissions(arrayOfRockets));
};

export default missionsReducer;
