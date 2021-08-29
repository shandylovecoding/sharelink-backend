import { LIST_LINK, ADD_LINK, DEL_LINK } from "./actions"

const initialState = {
    links: []
}

export function linkReducer(state = initialState, action) {
    switch (action.type) {
        // case LINK_REQUEST:
        // console.log("LINK_REQUEST",state);
        // return{...state}
        case LIST_LINK:
            return {
                links: action.payload
            }
        case ADD_LINK:
            return {
                links: action.payload
            };
        case DEL_LINK:
            return {
                links: action.payload
            }
        default:
            return state
    }
}