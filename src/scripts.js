 import apiCalls from './apiCalls.js';

 function loadData() {    //rename later?
   let allUserData = apiCalls.fetchAllUsersData()
   Promise.all([allUserData])
   .then(data => {
     console.log("All User Data", data)
   })
 }
 loadData()
//const user = getSingleUser()
// const getSingleUser = () => {
//   return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/1`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
// }

// let user;
// function grabUserData() {
//   Promise.all([getSingleUser()])
//   .then(value => {
//     let user = value[0]; //value 0 is referring to the first Promise returned in the Promise.all
//     console.log(user)
//   })
// }

//grabUserData()
