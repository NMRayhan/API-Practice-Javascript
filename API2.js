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
    ${today.country}
`
