
const axios = require('axios')
const  Investors = require('../models/users')

module.exports = function getUsers(let number){
axios.post('https://api.dailygetplan.com:8304/v1/user/GetUserById', { "userid": number }, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNhbWVlcjIwMDEiLCJwYXNzd29yZCI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5JakV5TXlJLnBOTDlGRjJ1Rzk5ZXVNbnhPUE1BQVFXUWJGSHFKRFFhc2NqTmhQRWtKNTgiLCJSb2xlIjoiSW52ZXN0b3IiLCJSb2xlVHlwZSI6IlVzZXIifQ.KXQKJVzN_53V74NZif5CpOnCWZmdmqr_S9jx9Nhc03E',
    'X-Requested-With': 'Wallet',
    'Origin': '[{"key":"Origin","value":"https://user.dailygetplan.com","description":""}]'
  }
})
  .then((response) => {
    
// const investors = new Investors(response.data.data);
// investors.save().then(() => console.log('there is goes'));

    console.log(response.data.data)
  })
}