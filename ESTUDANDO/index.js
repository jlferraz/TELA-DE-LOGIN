function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "joaoferraz" && senha == "ferrazlindo"){
        alert('sucesso');
        location.href = "https://ferrazimports.com.br/?srsltid=AfmBOoo3ByVq_SXGCw-bFTKVfFIJ5d--mg_1K6aX1MNJe1H4lBbYfqcK";
    }else{
        alert('Usuario ou senha incorretos')
    }
}