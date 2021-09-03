import axios from "axios"
export const LINKS_REQUEST = "LINKS_REQUEST";
export const ADD_LINK_SUCCESS = "ADD_LINK_SUCCESS"
export const ADD_LINK_FAIL = "ADD_LINK_FAIL"

export const DEL_LINK_SUCCESS = "DEL_LINK_SUCCESS"
export const DEL_LINK_FAIL = "DEL_LINK_FAIL"

export const LIST_LINK_SUCCESS = "LIST_LINK_SUCCESS"
export const LIST_LINK_FAIL = "LIST_LINK_FAIL"


export const AddLink = (link) => async(dispatch) =>{
    try{
        dispatch({ type: LINKS_REQUEST });
        console.log("link in actions",link);
        const {data} = await axios.post(
           ` http://localhost:8000/link`,link
        )
        console.log("data in actions",data);
        dispatch({type:ADD_LINK_SUCCESS, payload: link})
    } catch (err){
        dispatch({ type: ADD_LINK_FAIL, payload: err });
    }
}

export const DelLink = (index) => async(dispatch) =>{
    try{
        dispatch({ type: LINKS_REQUEST }); 
        const {data} = await axios.delete(
           `http://localhost:8000/link/${index}`
        )
        console.log("data in actions",data);
        dispatch({type:DEL_LINK_SUCCESS, payload: data})
    } catch (err){
        console.log(err);
        dispatch({ type: DEL_LINK_FAIL, payload: err });
    }
}


export const ListLink = (search) => async(dispatch) =>{
    try{
        dispatch({ type: LINKS_REQUEST }); 
        console.log("search in actions",search);
        const {data} = await axios.get(
           ` http://localhost:8000/link?search=${search}`
        )
        console.log('<<<<<<>>>>>>data in actions(Listlink)',data);
        dispatch({type:LIST_LINK_SUCCESS, payload: data})
    } catch (err){
        console.log(err);
        dispatch({ type: LIST_LINK_FAIL, payload: err });
    }
}
