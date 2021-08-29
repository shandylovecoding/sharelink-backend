import axios from "axios"

export const ADD_LINK = "ADD_LINK"
export const DEL_LINK = "DEL_LINK"
export const LIST_LINK = "LIST_LINK"

export const AddLink = (link) => async(dispatch) =>{
    try{
        console.log("link in actions",link);
        const {data} = await axios.post(
           ` http://localhost:8000/link`,link
        )
        console.log("data in actions",data);
        dispatch({type:ADD_LINK, payload: data})
    } catch (err){
        console.log(err);
    }
}

export const DelLink = (index) => async(dispatch) =>{
    try{
        
        const {data} = await axios.delete(
           `http://localhost:8000/link/${index}`
        )
        console.log("data in actions",data);
        dispatch({type:DEL_LINK, payload: data})
    } catch (err){
        console.log(err);
    }
}


export const ListLink = (search) => async(dispatch) =>{
    try{
        console.log("search in actions",search);
        const {data} = await axios.get(
           ` http://localhost:8000/link?search=${search}`
        )
        console.log('data in actions(Listlink)',data);
        
        dispatch({type:LIST_LINK, payload: data})
    } catch (err){
        console.log(err);
    }
}
