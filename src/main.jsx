import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)



//Start with store making in one application there is one store single source of truth
//we will configureStore there then we will pass the reducers:addreducerType value 
//there can be multiple key value pairs possible
//reducers are in todoSlice(naming convention) createSlice is function takes
//three things name:todo,initialstate,reducers:{}
//reducer is object takes two values propertu:function (state,action){}
//in context API state is not preserved and in redux toolkit state is preserved
//at last in nameSlice file u have to export all the reducers and then 
//export the nameSlice.reducer
