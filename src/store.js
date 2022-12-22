import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'                     //to generate middleware
import {restaurantlistReducer} from './Reducers/restaurantReducer'

const reducers=combineReducers({        //2nd
restaurantReducer:restaurantlistReducer         //key:function
})

const middleware=[thunk]
const store=createStore(reducers, applyMiddleware(...middleware))       //1st

export default store