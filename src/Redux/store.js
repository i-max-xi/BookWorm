import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rocketsReducer, { fetchRockets } from "./Rockets/RocketSlice";
import missionsReducer from "./Missions/MissionSlice";

const reducers = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const configureStore = createStore(reducers, applyMiddleware(thunk));

export default configureStore;
