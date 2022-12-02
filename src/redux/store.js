import { createStore } from "redux";
import reducer from "./reducer";
let store=createStore(reducer);
/*getState=()=>{
    return store;
}*/
export default store;