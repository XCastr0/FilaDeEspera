let paciente = [];

function mostrarPacientes() {
    const result = document.getElementById("message");
    
    if (paciente.length === 0) {
        result.textContent = "Ainda não existem pacientes cadastrados!";
    } else {
        
        let listaPacientes = "";
        for (let i = 0; i < paciente.length; i++) {
            listaPacientes += `${i + 1} - ${paciente[i]}\n`; 
        }
        result.textContent = "Pacientes em espera:\n" + listaPacientes;
    }
}

function novoPaciente() {
    const novoPaciente = prompt("Informe o nome do novo paciente");
    
    if (novoPaciente && novoPaciente.trim() !== "") {
        paciente.push(novoPaciente);
        alert("Novo paciente cadastrado: " + novoPaciente);
    } else {
        alert("Nome do paciente não informado.");
    }
}

function consultarPaciente() {
    if (paciente.length === 0) {
        alert("Não há pacientes para consultar.");
    } else {
        let pacienteConsultado = paciente.shift();
        alert("O paciente consultado foi: " + pacienteConsultado);
    }
}

function sair() {
    alert("Saindo do sistema...");
}
