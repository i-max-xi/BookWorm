const FETCH_MISSIONS = "space-travelers/Missions/FETCH_MISSIONS";
const baseURL = "https://api.spacexdata.com/v3/missions";

// Reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.missions;
    default:
      return state;
  }
};

// Action
export const getMissions = (missions) => ({
  type: FETCH_MISSIONS,
  missions,
});

// Fetch API
export const fetchMissions = () => async (dispatch) => {
  const arrayOfMissions = await fetch(baseURL)
    .then((res) => res.json())
    .then((data) =>
      Object.entries(data).map((mission) => {
        const { description, id } = mission[1];
        const name = mission[1].mission_name;
        return {
          id,
          description,
          name,
        };
      })
    );

  dispatch(getMissions(arrayOfMissions));
};

export default missionsReducer;
