export const reducer = (state, action) => {
    switch(action.type){
        case "GET_DENTISTS":
            return { ...state, data: action.payload}
        case "CHANGE_THEME":
            return {...state, theme: action.payload}
        default:
            return state;
    }
}

export const favReducer = (favState, action) => {
    switch(action.type){
        case "GET_DENTIST":
            return action.payload;
        default:
            return favState;
    }
}