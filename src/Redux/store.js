import { applyMiddleware, combineReducers,  createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cvReducer from "./Cv/cv.reducer";
// import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  menuBlock: cvReducer,
  // users: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;