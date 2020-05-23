function printHour(data) {
    document.getElementById("title").innerHTML = data[0];
    document.getElementById("detail").innerHTML = "<span style=\"color:#0000FF\";>*** Détail ***</span> <br />hours : " + data[1].hours + "<br />minutes : " + data[1].minutes + "<br />seconds : " + data[1].seconds;

    let time = [];
    time.push(data[1].hours);
    time.push(data[1].minutes);
    time.push(data[1].seconds);
    displayClock(time);

    setTimeout(ajaxRequest('GET','php/time.php', printHour), 1000);
}

function ajaxRequest(type, url, callback){
    let request = new XMLHttpRequest();
    request.open(type, url);

    request.onload = () => {
        let json = request.responseText;
        let data = JSON.parse(json);
        // console.log(json);
        // console.log(data);
        callback(data);
    };

    request.send();
    
}

function main(){
        ajaxRequest('GET','php/time.php', printHour);
    }
    
    main();