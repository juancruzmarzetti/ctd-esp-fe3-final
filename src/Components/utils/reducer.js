export const reducer = (state, action) => {
    switch(action.type){
        case "GET_DENTISTS":
            return { ...state, data: action.payload}
        case "CHANGE_THEME":
            return {...state, theme: action.payload}
    }
}