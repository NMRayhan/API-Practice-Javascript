fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        // displayUserName(json)
        if (json.length > 0) {
            let temp = ""
            json.forEach(elmt => {
                temp += "<tr>"
                temp += "<td>" + elmt.id + "</td>"
                temp += "<td>" + elmt.name + "</td>"
                temp += "<td>" + elmt.username + "</td>"
                temp += "<td>" + elmt.email + "</td>"
                temp += "<td>" + elmt.address.street + ',' + elmt.address.suite + ',' + elmt.address.city + ',' + elmt.address.zipcode + ',' + 'Geoloc: [' + elmt.address.geo.lat + ',' + elmt.address.geo.lng + ']' + "</td>"
                temp += "<td>" + elmt.phone + "</td>"
                temp += "</tr>"

            });
            document.getElementById('data').innerHTML = temp
        }
    })

document.getElementById('submit').addEventListener('click', function () {
    const userName = document.getElementById('username').value;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            let temp = ""
            json.forEach(elmt => {
                if (elmt.username == userName || elmt.name == userName) {
                    temp += "<tr>"
                    temp += "<td>" + elmt.id + "</td>"
                    temp += "<td>" + elmt.name + "</td>"
                    temp += "<td>" + elmt.username + "</td>"
                    temp += "<td>" + elmt.email + "</td>"
                    temp += "<td>" + elmt.address.street + ',' + elmt.address.suite + ',' + elmt.address.city + ',' + elmt.address.zipcode + ',' + 'Geoloc: [' + elmt.address.geo.lat + ',' + elmt.address.geo.lng + ']' + "</td>"
                    temp += "<td>" + elmt.phone + "</td>"
                    temp += "</tr>"
                }
            })
            document.getElementById('data').innerHTML = temp
        })
})



// function displayUserName(user) {
//     const userName = user.map(user => user.username)
//     const ul = document.getElementById('li-container')
//     for (let i = 0; i < userName.length; i++) {
//         const elmt = userName[i];
//         const li = document.createElement('li')
//         li.innerText = elmt
//         ul.appendChild(li)
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })