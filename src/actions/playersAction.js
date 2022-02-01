import axios from "axios"

export const asynGetPlayers=(title)=>{
    return (dispatch) => {
        axios.get(`http://localhost:3055/olympic/allPlayers`)
            .then((res) => {
               dispatch(getPlayerAction(res.data)) 
               console.log('crew',res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}
const getPlayerAction = (data) => {
    return {
        type: 'GET_PLAYER',
        payload: data
    }
}