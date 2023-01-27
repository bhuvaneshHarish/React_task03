export const intialState = {
    products:[]
}

export const updateState=(state,action)=>{
    console.log('action',action.payload)
    switch(action.type){
        case "add_to_cart":
            return{
                ...state,
                products:action.payload,
            };
        case "editform":
            const data=state.products.map((el)=>el.id == action.payload.id?action.payload:el)
            return{
                ...state,
                products:[...data]
            };
            case "deleteitem":
                return{
                    ...state,
                   products:action.payload
                }

                    
        default:
            return state
    }
}

