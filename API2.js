const today = {
    name: "Nur Mohammad Rayhan",
    today: new Date(),
    city: "dhaka",
    country: "bangladesh"
}
console.log(today);
const DataFromObj = JSON.stringify(today)
document.getElementById('demo').innerText = DataFromObj
document.getElementById('demo1').innerText = `
    ${today.name}
    ${today.today}
    ${today.city}
    ${today.country}`


async function LoadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    return data;
}

LoadData();

LoadData().then(data => {
    displayData(data);
})

function displayData(data) {
    const nodeList = window.document.getElementById('myList');
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const list = document.createElement('li')
        list.innerText = item.name;
        nodeList.appendChild(list);
    }
}
