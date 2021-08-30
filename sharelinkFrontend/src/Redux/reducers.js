import { LIST_LINK, ADD_LINK, DEL_LINK } from "./actions"

const initialState = {
    links: []
}

export function linkReducer(state = initialState, action) {
    switch (action.type) {
        case LIST_LINK:
            console.log("list link action.payload in reducer",action.payload);
            return { links: action.payload }
        case ADD_LINK:
            console.log("add link action.payload in reducer",action.payload);
            return {
              links: state.links.concat(action.payload)
            };
        case DEL_LINK:
            console.log("del link action.payload in reducer",action.payload);
            return {
              links: [...action.payload]
            }
            default:
                return state
    }
}