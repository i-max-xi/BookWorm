import { combineReducers } from "redux";
import rocketsReducer from "./Rockets/RocketSlice";
import missionsReducer from "./Missions/MissionSlice";

const configureStore = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

export default configureStore;
