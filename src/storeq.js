// import {createStore} from "redux"

// const initialState ={
//     user:{
//         username: "Gamana",
//         balance: 20000
//     }
// }


// //Action
// const addMoney = () => ({
//     type: addMoney,
//     payload: amt
// })

// const removeMoney = () => ({
//     type: removeMoney,
//     payload: amt
// })


// //Reducer
// function reducer(state = initialState, action) {
//     switch(action.type){
//         case 'addMoney':
//             return {
//                 user: {
//                     username : state.user.username,
//                     balance: state.user.balance + action.payload
//                 }
//             };

//         case 'removeMoney':
//             return {
//                 user: {
//                     username : state.user.username,
//                     balance: state.user.balance - action.payload
//                 }
//             };
//             default:
//                 return state
//     }
// }

// const store = createStore(reducer);
// export default  store;