const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
event.preventDefault();
console.log("Formulário enviado!");
});

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
console.log(nome);
console.log(email);

if (nome.length < 3) {
alert("O nome deve ter pelo menos 3 caracteres.");
return;
}
if (!email.includes("@")) {
alert("Email inválido.");
return;
}

alert("Formulário enviado com sucesso!");

document.getElementById("mensagem-sucesso").innerText =
"Formulário enviado com sucesso!";