export const reducer = (state, action) => {
    switch(action.type){
        case "GET_DENTISTS":
            return { ...state, data: action.payload}
        case "CHANGE_THEME":
            localStorage.setItem("theme", JSON.stringify(action.payload))
            return {...state, theme: action.payload}
        case "SET_NAV_STATE":
            localStorage.setItem("navState", JSON.stringify(action.payload));
            return {...state, navState: action.payload}
        default:
            return state;
    }
}

const noRepeat = (array, id) => {
    let response = true;
    for(let i = 0; i < array.length; i++){
        if(array[i].id == id){
            response = false;
        }
    }
    return response;
}

export const favReducer = (favState, action) => {
    switch (action.type) {
        case "SAVE_FAV":
            const noRepetition = noRepeat(favState, action.payload.id);
            if(noRepetition === true){
                const favItem = [...favState, action.payload];
                localStorage.setItem("favs", JSON.stringify(favItem));  
                return favItem;
            }else{
                console.log(`The dentist whose id is ${action.payload.id}, ALREADY EXISTS in your FAV list!`)
                return favState;
            }
        case "DELETE_FAV":
            let favItemDelete = [...favState];
            const findById = (fav) => fav.id === action.payload;
            const indexFindedById = favItemDelete.findIndex(findById);
            favItemDelete.splice(indexFindedById, 1);
            localStorage.setItem("favs", JSON.stringify(favItemDelete));  
            return favItemDelete;
        default:
            return favState;
    }
}