
import {useReducer} from "react"
import './App.css';
import Routings from './Routings';
import {intialState,updateState} from "./Reducer"
import {todoContext} from "./Context"

const App =() =>{
  
  const [state, dispatch] = useReducer(updateState,intialState)

  return (
    <todoContext.Provider value={{state,dispatch}}>
      <Routings/>
    </todoContext.Provider>
  );
}
export default App;
