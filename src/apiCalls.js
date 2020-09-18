//https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/1
//where<id> will be a number of a traveler’s id

const getSingleUser = () => {
  return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/1`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

// export default {
//   getSingleUser
// }
if (typeof module !== 'undefined') {
  module.exports = getSingleUser;
}
