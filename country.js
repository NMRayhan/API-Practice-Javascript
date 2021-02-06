
document.getElementById('submitBtn').addEventListener('click', function () {
    const input = document.getElementById('inputText').value;
    fetch('https://restcountries.eu/rest/v2/name/' + input + '?fullText=true')
        .then(response => response.json())
        .then(data => {
            let temp = ""
            data.forEach(items => {
                temp += "<tr>"
                temp += "<td>" + items.name + "</td>"
                temp += "<td>" + items.capital + "</td>"
                temp += "<td>" + items.population + "</td>"
                temp += "<td>" + items.region + "</td>"
                temp += "<td>" + items.timezones + "</td>"
                temp += "<td>" + items.area + " km²" + "</td>"
                temp += "<td>" + `<img src= ${items.flag} alt=''>` + "</td>"
                temp += "<td>" + `<a href="${items.numericCode}"><i class="fas fa-arrow-circle-right"></i></a>` + "</td>"
                temp += "</tr>"
            });
            document.getElementById('CountryDetails').innerHTML = temp
        })
})