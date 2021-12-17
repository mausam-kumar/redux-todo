import {actionTypes} from './action.js';
const initialState = {

    todos:[]
}

export const reducer = (state=initialState,{type,payload}) => {
    switch (type) {

        case actionTypes.ADD_TODO:{
            return{
                ...state,
                todos:[...state.todos,payload]
            }
        }
        case actionTypes.REMOVE_TODO:{
            return{
                ...state,
                todos:[...state.todos.filter((ele) => ele.id !== payload)]
            }
        }

        case actionTypes.TOGGLE_TODO:{
            return{
                ...state,
                todos:[...state.todos.map((ele) => {
                    if (ele.id===payload) {
                        return{
                            ...ele,
                            status:ele.status==="false"?"true":"false"
                        }
                    }else{
                        return{
                            ...ele
                        }
                    }
                })]
            }
        }
        
        default:
            return state
    }
}