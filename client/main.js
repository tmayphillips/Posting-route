

let sendBtn = document.getElementById('sendBtn')
let firstNameText = document.getElementById('firstNameText')
let lastNameText = document.getElementById('lastNameText')
let name = document.getElementById('name')

sendBtn.addEventListener('click',function() {
  let firstname = firstNameText.value
  let lastname =  lastNameText.value

  fetch('http://localhost:3000/fullname', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userFirstName: firstname,
      userLastName: lastname,
    })
  }).then(response => {
      return response.json()
  }).then(json => {
    console.log(json)
    name.innerHTML = `Name: ${json.lastname}, ${json.firstname}`
  })
  })
