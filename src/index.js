import getSingleUser from './apiCalls.js'; //import not working for some reason?
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');
//const user = getSingleUser()

// const getSingleUser = () => {
//   return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/1`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
// }

let user;
function grabUserData() {
  Promise.all([getSingleUser()])
  .then(value => {
    let user = value[0]; //value 0 is referring to the first Promise returned in the Promise.all
    console.log(user)
  })
}

grabUserData()
