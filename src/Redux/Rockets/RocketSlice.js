const FETCH_ROCKET = 'space-travelers/Rockets/FETCH_ROCKET';
const baseURL = 'https://api.spacexdata.com/v3/rockets';

// Reducer
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return [...state, action.rocket];
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
  const arrayOfRockets = fetch(baseURL);
  const rockets = arrayOfRockets
    .then((res) => res.json())
    .then((data) => Object.entries(data).map(([id, rocket]) => {
      const { description } = rocket;
      const name = rocket.rocket_name;
      const image = rocket.flickr_images;
      const ID = Number(id) + 1;
      return {
        ID,
        description,
        name,
        image,
      };
    }));

  dispatch(getRockets(rockets));
};

// const Rockets = fetch(baseURL)
//   .then((res) => res.json())
//   .then((data) =>
//     Object.entries(data).map(([id, rocket]) => {
//       const { description } = rocket;
//       const name = rocket.rocket_name;
//       const image = rocket.flickr_images;
//       const ID = Number(id) + 1;
//       return {
//         ID,
//         description,
//         name,
//         image,
//       };
//     })
//   );

// console.log(Rockets);

export default rocketsReducer;
