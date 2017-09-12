document.getElementById('btn').addEventListener('click',loadText);


function loadText() {
    //create XHR object

    var xhr  = new XMLHttpRequest();
    //open  - type ,url/file , async (true/false)
    // xhr.open('GET',"text.txt",true);
    xhr.open('GET',"https://api.github.com/users",true);

    // console.log(xhr);
    // xhr.onload = function () {
    //     if(this.status===200){
    //         console.log(this.responseText);
    //     }
    // }
    xhr.onreadystatechange = function () {
        if(this.readyState===4 && this.status===200){
            var output="";
            var users = JSON.parse(this.responseText );

            console.log(users);
            for(var i  in users){
                output+='<div class="wrapper">'+'<div class="user"'+'</div>'+
                   '<img src="'+users[i].avatar_url+'" width="70" height="70">' +

                    '<ul>' +
                    '<li>Login: '+ users[i].login+'</li>' +
                    '<li>Id: '+ users[i].id+'</li>' +
                    '<li>Type: '+ users[i].type+'</li>' +
                    '<li>Url: '+ users[i].url+'</li>' +
                    '</ul>'+
                    '</div>'+
                    '<hr>'


            }
        }
        document.getElementById('users').innerHTML=output;

    }
    //Sends request
    xhr.send()



 //readyState Value :
    //0 : request not initialized
    //1 : server connection established
    //2 : request received
    //3 : processing request
    //4 : request finished and response is ready
    //HTTP Statuses:
    //200 : "OK"
    //403 : "Forbidden"
    //404 : "Not Found"
}