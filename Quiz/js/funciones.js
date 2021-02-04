function datos(){
    let nombreUser = document.getElementById("first_name").value;
    let apellidoUser = document.getElementById("last_name").value;
    document.getElementById("ver").innerHTML = "Nombre completo: " + nombreUser+" "+apellidoUser;

    let emailUser = document.getElementById("email").value;
    document.getElementById("ver2").innerHTML = "Correo Electrónico: " + emailUser;

    let contactUser = document.getElementById("contact_number").value;
    document.getElementById("ver3").innerHTML = "Número de contacto: " + contactUser;

    let addressUser = document.getElementById("address").value;
    document.getElementById("ver4").innerHTML = "Dirección casa: " + addressUser;

    let address2User = document.getElementById("address2").value;
    document.getElementById("ver5").innerHTML = "Dirección opcional: " + address2User;
}