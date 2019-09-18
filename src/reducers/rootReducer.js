
const initialstate={

    list: [
        {title :"book1" ,Description :"book1 description"},
        {title :"book2" ,Description :"book2 description"},
        {title :"book3" ,Description :"book3 description"},
        {title :"book4" ,Description :"book4 description"},
        {title :"book5" ,Description :"book5 description"}
    ]
}
const rootReducer = (state = initialstate , action) => {
    console.log(action);
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                 list: [...state.list, action.payload]
            };
            break;

    }
    return state;
};

export default rootReducer;