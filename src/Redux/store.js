import { combineReducers } from 'redux';
import rocketsReducer from './Rockets/RocketSlice';

const configureStore = combineReducers({
  rockets: rocketsReducer,
});

export default configureStore;
