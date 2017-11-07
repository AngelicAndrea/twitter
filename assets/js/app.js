// guía de instagram
function myFunction (){ // función se ejecuta al momento de hacer click
    var comment = document.getElementById('comment').value;
    if (comment == "") {
        alert('Escribe un comentario valido... =)');
    }else{
        document.getElementById("comment").value="";
        var newComments=document.createElement("div");
        var cont = document.getElementById("cont");
        var check = document.createElement("input");
        var paragraph = document.createElement("p");
        var nameSpan = document.createElement("span");
        var dateSpan = document.createElement("span");
        nameSpan.classList.add("username");
        dateSpan.classList.add("userdate");
        paragraph.classList.add("textnew")

        var nodoText = document.createTextNode(comment);
        
        paragraph.appendChild(nodoText);
       
        newComments.appendChild(nameSpan);
        newComments.appendChild(dateSpan);
        newComments.appendChild(paragraph);
        cont.appendChild(newComments);
        nameSpan.textContent = "@AngelicAndrea ";
        dateSpan.textContent = new Date().toDateString();


        
        cont.insertBefore(newComments, cont.children[0]);
    }
}    

// Versión 0.0.2 

function count(){ // llama la función al momento de presionar y soltar el teclado.
   var tweetCounter = "140";// variable cantidad máxima de caracteres 
    var text = document.getElementById("comment").value;//variable del string es igual el valor que se escriba en text tarea
    var longitud = text.length;//variable el largo del texto.

    if (longitud <= tweetCounter) {// la condición se cumple si la longitud es menor o igual a los 140 caracteres.
        document.getElementById("contador").value = tweetCounter-longitud;// el input contador es igual a 140 - al largo del string.
    }else{// si no se cumple
        document.getElementById("comment").value = text.substr(0,tweetCounter);//estrae desde la posición 0 y el total de los caractere.

    }   
}    

//Versión 0.0.3 contadores de colores







/*window.onload = function (){ no me funciono u.u

	var sendComments = document.getElementById('comment').value;
	document.getElementById('comment').value = ""; // sirve para que siempre la area de escribir 
	//comentarios quede en blanco.
   var buttonSend = document.getElementsByName('twitter');

    sendComments.onclick = function{ // que realiza al hacer click en el botón.
    	if (thinkInput.value == "") {
            alert("tení k poner algo oe!");} else{
            	var newComments = document.createElement('div'); //creo un elemento nuevo en donde ira los comentarios nuevos.
                var nameSpan = document.createElement ('span'); //cree un elemento en donde ira el nombre del usuario.
                var dateSpan = document.createElement('span'); //cree un elemento en donde ira la hora que fue escrito el twitter.
                var newTwitter = document.createElement('p');// cree un elemento en donde se colocara el texto escrito.
                newComments.appendChild(nameSpan);// agrego al elemneto div como hijo el elemento del nombre del usuario.
                newComments.appendChild(dateSpan);// agregue el elemnt al div 
                newComments.appendChild(newTwitter);//agregue el elemento al div
                newComments.className = 'newComments';
                nameSpan.textContent = '@AngelicAndrea';
                dateSpan.textContent = new Date ();

            }

    }
}*/