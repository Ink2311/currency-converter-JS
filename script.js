let url;

function submit() {
    let number = document.getElementById("inputValue").value;
    let fromCurrency = document.getElementById("convertFrom").value;
    let toCurrency = document.getElementById("convertTo").value;

    let apiKey = "adab94eac463b8a30905c30d";
    url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${number}`;

    if (!fromCurrency || !toCurrency) {
        console.error("Выберите валюты для конвертации.");
    } 
}

function convertValue(){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let result = data.conversion_result;
            document.getElementById("result").textContent = Math.round(result) + " " +  document.getElementById("convertTo").value;
        })
        .catch(error => console.error(error));
}