import {createStore} from "redux";
import characterReducer from "./character-reducer";

const store = createStore(characterReducer);

export default store;