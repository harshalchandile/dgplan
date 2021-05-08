
const axios = require('axios')

module.exports = function getTransactions(let number)
{ axios.post('https://api.dailygetplan.com:8304/v1/transaction/GetAllUserTransaction', { "userid": number, "secure": 0 }, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNhbWVlcjIwMDEiLCJwYXNzd29yZCI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5JakV5TXlJLnBOTDlGRjJ1Rzk5ZXVNbnhPUE1BQVFXUWJGSHFKRFFhc2NqTmhQRWtKNTgiLCJSb2xlIjoiSW52ZXN0b3IiLCJSb2xlVHlwZSI6IlVzZXIifQ.KXQKJVzN_53V74NZif5CpOnCWZmdmqr_S9jx9Nhc03E',
    'X-Requested-With': 'Wallet',
    'Origin': '[{"key":"Origin","value":"https://user.dailygetplan.com","description":""}]'
  }
})
  .then((response) => {
    console.log(response.data.data)
  })
}