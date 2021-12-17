import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from './redux/reducer.js'


const store = createStore(reducer)


const rootElement = document.getElementById("root");
ReactDOM.render(
      <Provider store={store}>
            <App />
      </Provider>
      ,
      
      rootElement
);
