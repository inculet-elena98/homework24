
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'user'
//   })
// })
//   .then(res => {
//     return res.json()
//   })
//   .then(data => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'DELETE',
// })
//   .then(res => {
//     return res.json()
//   })
//   .then(data => console.log(data))


fetch('https://jsonplaceholder.typicode.com/posts',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ a: 1, b: 2 })
  })
  .then(function (res) { console.log(res) })
  .catch(function (res) { console.log(res) })





