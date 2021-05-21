

const axios = require('axios');

// axios.get('https://reqres.in/api/users?page=2').
// then(function (response) {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.headers);
// });

// axios.post('https://reqres.in/api/users', {
//     "name": "Jerry",
//     "job": "cat"
// }).then(function (response) {
//     console.log(response.headers);
// }).catch(function(err) {
//     console.error(err);
// })


//Homework

//GET

axios.get('https://reqres.in/api/unknown').
then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.headers);
});

//POST

axios.post('https://reqres.in/api/register', {
    "email": "test@mail.ru"
}).then(function (response) {
    console.log(response.status);
}).catch(function(err) {
    console.error(err);
})

//PATCH

axios.patch('https://reqres.in/api/users/2', {
    "name": "Jack",
    "job": "teacher"
}).then(function (response) {
    console.log(response.status);
    console.log(response.headers);
}).catch(function(err) {
    console.error(err);
})

//DELETE

axios.patch('https://reqres.in/api/users/2').
then(function (response) {
    console.log(response.status);
    console.log(response.headers);
})

//PUT

axios.patch('https://reqres.in/api/users/2', {
    "name": "Lena",
    "job": "QA"
}).then(function (response) {
    console.log(response.status);
    console.log(response.data);
}).catch(function(err) {
    console.error(err);
})