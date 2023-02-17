var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("fade");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
                adicionaPacienteTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("fade"); 
        }
    })
    xhr.send();
});
//AJAX - requisições JS de modo assíncrono