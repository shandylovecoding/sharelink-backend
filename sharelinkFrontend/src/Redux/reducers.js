import { LINKS_REQUEST, LIST_LINK_SUCCESS, LIST_LINK_FAIL, ADD_LINK_SUCCESS, ADD_LINK_FAIL, DEL_LINK_SUCCESS, DEL_LINK_FAIL } from "./actions"

const initialState = {
    loading: false,
    error: false,
    links: [],
}

export function linkReducer(state = initialState, action) {
    switch (action.type) {
        case LINKS_REQUEST:
            return { ...state, loading: true, error: false };
        case LIST_LINK_SUCCESS:
            console.log("list link action.payload in reducer", action.payload);
            return { loading: false, error: false, links: action.payload }
        case ADD_LINK_SUCCESS:
            console.log("add link action.payload in reducer", action.payload);
            return {
                loading: false, error: false, links: state.links.concat(action.payload)
            };
        case DEL_LINK_SUCCESS:
            console.log("del link action.payload in reducer", action.payload);
            return {
                loading: false, error: false, links: [...action.payload]
            }
        case LIST_LINK_FAIL:
            return { ...state, loading: false, error: true };
        case ADD_LINK_FAIL:
            return { ...state, loading: false, error: true };
        case DEL_LINK_FAIL:
            return { ...state, loading: false, error: true };
        default:
            return state
    }
}