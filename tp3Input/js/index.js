function print(date){
    date = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg> <strong>'+ date + '</strong>'
    document.getElementById('timestamp').innerHTML = date;
    setTimeout(ajaxRequest('GET','php/timestamp.php', print), 1000);
}

function ajaxRequest(type, url, callback){
    let request = new XMLHttpRequest();
    request.open(type, url);

    request.onload = () => {
        switch (request.status){
            case 200:
            case 201:
            // console.log(xhr.responseText);
                callback(request.responseText);
            break;
            default: callback(request.status);
        }
    };

    request.send();
    
}

function print_error(error){
    let texte;
    switch(error){
        case 400:
            texte = '400: Requête incorrecte';
            break;
        case 401:
            texte = '401: Authentifiez vous';
            break;
        case 403:
            texte = '403: Accès refusé';
            break;
        case 404:
            texte = '404: Page non trouvée';
            break;
        case 500:
            texte = '500: Erreur interne du serveur';
            break;
        case 503:
            texte = '503: Service indisponible';
            break;
    }
    let div = document.getElementById('errors');
    div.innerHTML = '<span class="material-icons">error</span>' + texte;
    div.style.display = null;

}

function main(){
    ajaxRequest('GET', 'php/timestamp.php', print);
    ajaxRequest('GET','php/errors.php',print_error);
    console.log("test");
}

main();