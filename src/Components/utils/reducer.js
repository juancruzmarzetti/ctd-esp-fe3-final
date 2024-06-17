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
    switch (action.type) {
        case "SAVE_FAV":
            const favItem = [...favState, action.payload];
            localStorage.setItem("favs", JSON.stringify(favItem));  
            return favItem;
        default:
            return favState;
    }
}