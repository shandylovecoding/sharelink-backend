export const ADD_LINK = "ADD_LINK"

export function AddLink (link){
    return {
        type: ADD_LINK,
        payload: link
    }
}


export const DEL_LINK = "DEL_LINK"

export function DelLink (index){
    return {
        type: DEL_LINK,
        payload: index
    }
}