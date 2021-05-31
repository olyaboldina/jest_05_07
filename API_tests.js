
const axios = require('axios');

//GET

axios.get('https://reqres.in/api/unknown/2').
then(function (response) {
    console.log(response.status);
    console.log(response.headers);
});

//POST

axios.post('https://reqres.in/api/login', {
    "email": "test@mail.ru",
    "password": "test_pass"
}).then(function (response) {
    console.log(response.status);
    console.log(response.headers);
    console.log(response.data);
}).catch(function(err) {
    console.error(err);
})

//PATCH

axios.patch('https://reqres.in/api/users/2', {
    "name": "Robert",
    "job": "QA engineer"
}).then(function (response) {
    console.log(response.status);
}).catch(function(err) {
    console.error(err);
})

//DELETE

axios.patch('https://reqres.in/api/users/2').
then(function (response) {
    console.log(response.status);
    console.log(response.headers);
    console.log(response.data);
})

//PUT

axios.patch('https://reqres.in/api/users/2', {
    "name": "Liza",
    "job": "CEO"
}).then(function (response) {
    console.log(response.status);
    console.log(response.data);
}).catch(function(err) {
    console.error(err);
})