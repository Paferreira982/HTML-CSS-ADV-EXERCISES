function validateNome() {
    let nome = document.getElementById('nome');

    if (nome.value.length > 40 || nome.value.length < 5) {
        document.getElementById("nome-feedback").innerHTML = "O nome deve ter entre 5 e 40 caracteres."
        nome.removeAttribute("class");
        nome.setAttribute("class", "form-control is-invalid")
        return;
    }

    if (nome.value.split(" ").length == 1) {
        document.getElementById("nome-feedback").innerHTML = "Por favor, informe seu nome completo."
        nome.removeAttribute("class");
        nome.setAttribute("class", "form-control is-invalid")
        return;
    }

    let regex = "!@#$%¨&*()_+1234567890-=´[]~;/.,<>:?}^`{/*-+.°ºª§-'";

    for (let i = 0; i < nome.value.length; i++) {
        if (regex.includes(nome.value.charAt(i))) {
            document.getElementById("nome-feedback").innerHTML = "Por favor, informe um nome válido"
            nome.removeAttribute("class");
            nome.setAttribute("class", "form-control is-invalid")
            return;
        }
    }

    document.getElementById("nome-feedback").innerHTML = "";
    nome.removeAttribute("class");
    nome.setAttribute("class", "form-control is-valid");

}

function validateData() {
    let data = document.getElementById('dataNascimento');
    let hoje = new Date();
    let nascimento = new Date(data.value.split("/"));
    let ano = hoje.getFullYear() - nascimento.getFullYear();
    let m = hoje.getMonth() - nascimento.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        ano--;
    }

    if (ano < 18) {
        document.getElementById("dataNascimento-feedback").innerHTML = "Somente pessoas maiores de 18 anos."
        data.removeAttribute("class");
        data.setAttribute("class", "form-control is-invalid")
        return;
    }

    document.getElementById("dataNascimento-feedback").innerHTML = ""
    data.removeAttribute("class");
    data.setAttribute("class", "form-control is-valid")

}

function validateSex() {
    let sexo = document.getElementById('sexo');

    if (sexo.value == "Selecione") {
        document.getElementById("sexo-feedback").innerHTML = "Por favor, informe seu sexo."
        sexo.removeAttribute("class");
        sexo.setAttribute("class", "form-control is-invalid")
        return;
    }

    document.getElementById("sexo-feedback").innerHTML = ""
    sexo.removeAttribute("class");
    sexo.setAttribute("class", "form-control is-valid")
}

function validateCPF() {
    let cpf = document.getElementById('input-cpf');

    if (cpf.value.length != 14 || !cpf.value.includes(".") || !cpf.value.includes("-")) {
        document.getElementById("cpf-feedback").innerHTML = "Por favor, informe um CPF válido."
        cpf.removeAttribute("class");
        cpf.setAttribute("class", "form-control is-invalid")
        return;
    }

    document.getElementById("cpf-feedback").innerHTML = ""
    cpf.removeAttribute("class");
    cpf.setAttribute("class", "form-control is-valid")

}

function validateDesc() {
    let descricao = document.getElementById('descricao');

    if (descricao.value.length > 500 || descricao.value.length < 10) {
        document.getElementById("descricao-feedback").innerHTML = "A descrição deve ter entre 10 e 500 caracteres.";
        descricao.removeAttribute("class");
        descricao.setAttribute("class", "form-control is-invalid");
        return;
    }

    document.getElementById("descricao-feedback").innerHTML = "";
    descricao.removeAttribute("class");
    descricao.setAttribute("class", "form-control is-valid");
}

function adjustMaxAndMinOfDate() {
    document.getElementById("dataNascimento").setAttribute("max", getToday());
    document.getElementById("dataNascimento").setAttribute("min", "1900-01-01");
}

function getToday() {
    let hoje = new Date();
    let dd = hoje.getDate();
    let mm = hoje.getMonth() + 1;
    let yyyy = hoje.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    hoje = yyyy + '-' + mm + '-' + dd;
    return hoje;
}

function tratarCPF() {
    let cpf = document.getElementById('input-cpf');
    let regex = "0123456789"
    let string = cpf.value;
    const tecla = (window.event) ? event.keyCode : event.wich;

    if (tecla != 8) {

        for (let i = 0; i < string.length; i++) {
            let verificador = true;
            if (regex.includes(string.charAt(i)))
                verificador = false;

            if (verificador) {
                if (!((string.charAt(3) == "." && i == 3) || (string.charAt(7) == "." && i == 7) || (string.charAt(11) == "-" && i == 11))) {
                    let aux = string;
                    string = aux.slice(0, i) + aux.slice(i + 1, aux.length);
                    i--;
                }
            }
        }

        if (string.length == 14 && (!string.includes(".") || !string.includes("-"))) {
            let aux = string;
            string = aux.slice(0, 3) + "." + aux.slice(4, 7) + "." + aux.slice(8, 11) + "-" + aux.slice(12)
        } else {
            if (string.length == 11 && !string.includes(".") && !string.includes("-")) {
                let aux = string;
                string = aux.slice(0, 3) + "." + aux.slice(3, 6) + "." + aux.slice(6, 9) + "-" + aux.slice(9, 11)
            } else {
                if (string.length == 3 || string.length == 7)
                    string += ".";

                if (string.length == 11)
                    string += "-";

                if (string.length == 4 && string.charAt(3) != ".") {
                    let aux = string;
                    string = aux.slice(0, 3) + "." + aux.slice(3, 4)
                }

                if (string.length == 8 && string.charAt(7) != ".") {
                    let aux = string;
                    string = aux.slice(0, 7) + "." + aux.slice(7, 8)
                }

                if (string.length == 12 && string.charAt(11) != "-") {
                    let aux = string;
                    string = aux.slice(0, 11) + "-" + aux.slice(11, 12)
                }
            }
        }

    }
    cpf.value = string;
}