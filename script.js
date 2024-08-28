const CHAR_SET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'; // Rango completo de caracteres

// Función para encriptar el texto
function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const shift = 3; // Desplazamiento para cifrar
    let encryptedText = "";

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        const index = CHAR_SET.indexOf(char);

        if (index === -1) {
            // Si el carácter no está en CHAR_SET, lo mantenemos sin cambios
            encryptedText += char;
        } else {
            // Aplicar cifrado desplazando el índice del carácter
            const newIndex = (index + shift) % CHAR_SET.length;
            encryptedText += CHAR_SET[newIndex];
        }
    }

    updateOutput(encryptedText);
}

// Función para desencriptar el texto
function decryptText() {
    const inputText = document.getElementById("inputText").value;
    const shift = 3; // Desplazamiento para descifrar
    let decryptedText = "";

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        const index = CHAR_SET.indexOf(char);

        if (index === -1) {
            // Si el carácter no está en CHAR_SET, lo mantenemos sin cambios
            decryptedText += char;
        } else {
            // Aplicar descifrado desplazando el índice del carácter
            const newIndex = (index - shift + CHAR_SET.length) % CHAR_SET.length;
            decryptedText += CHAR_SET[newIndex];
        }
    }

    updateOutput(decryptedText);
}

// Función para actualizar el contenido de la salida
function updateOutput(text) {
    const outputTextElement = document.querySelector('.output-text');
    outputTextElement.textContent = text || 'Ningún mensaje fue encontrado';
}

// Función para copiar el texto al portapapeles
function copyText() {
    const textToCopy = document.querySelector('.output-text').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
