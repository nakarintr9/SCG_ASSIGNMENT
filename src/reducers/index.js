import { combineReducers } from "redux";
import registerReducer from "./register.reducer";
import loginReducer from "./login.reducer";
import appReducer from "./app.reducer";
import findXYZReducer from "./findxyz.reducer";
import findBCReducer from "./findbc.reducer";
import findTheBestWayReducer from "./findthebestway.reducer";

export default combineReducers({
  registerReducer,
  loginReducer,
  findXYZReducer,
  findBCReducer,
  findTheBestWayReducer,
  appReducer,
});
