document.getElementById("convert").addEventListener('click', () => {
    convert(document.getElementById("final").value, document.getElementById("source").value, document.getElementById("amount").value);
    document.getElementById("yourTotal").style.display = "block";
    document.getElementById("total").innerHTML = "Calculating...";
    document.getElementById("finalCurrency").style.display = "none";
});



function convert(to, base, amount){
    let myHeaders = new Headers();
    myHeaders.append("apikey", "iiW62scB2w6Ad3iEuf8tWNbxOib2UCsU");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    let apiString = "https://api.apilayer.com/exchangerates_data/convert?to=" + to + "&from=" + base + "&amount=" + amount;
    fetch(apiString, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.result === undefined){
                document.getElementById("total").innerHTML = "undefined, please enter a valid amount and try again.";
            }else{
                document.getElementById("total").innerHTML = data.result;
            }

            document.getElementById("finalCurrency").innerHTML = " " + data.query.to;
            document.getElementById("finalCurrency").style.display = null;
        });
}




