export const actionTypes = {
    ADD_TODO:"ADD_TODO",
    REMOVE_TODO:"REMOVE_TODO",
    TOGGLE_TODO:"TOGGLE_TODO"
}

export const addTodo = (payload) => {
    return{
        type:actionTypes.ADD_TODO,
        payload:payload
    }
} 
export const removeTodo = (id) => {
    return{
        type:actionTypes.REMOVE_TODO,
        payload:id
    }
} 
export const toggleTodo = (id) => {
    return{
        type:actionTypes.TOGGLE_TODO,
        payload:id
    }
} 
