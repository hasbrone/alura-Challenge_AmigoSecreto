    // Arreglo para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Se depurán espacios en blanco al inicio y al final

    // Validar que el dato no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Sale de la función si la validación falla
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Actualiza la lista en el front
    actualizarLista();

    // Limpieza del campo
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Depuración de la lista antes de actualizarla

    // Recorrer el arreglo añadiendo cada amigo como un elemento <li>
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar la disponibilidad antes de sortear
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtención del nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Muestra el resultado en el front
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
