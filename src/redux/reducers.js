import { ADD_LINK, DEL_LINK } from "./actions"

const initialState = {
    links: [{ modal: true, name: "google", url: "google.coom", tags: [{name: "search"}]}]
}

export function linkReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LINK:
            return {
              links: state.links.concat([action.payload])
            };
        case DEL_LINK:
            return {
              links: state.links.filter((link, i) => i !== action.payload)
            }
            default:
                return state
    }
}