document.addEventListener('DOMContentLoaded', function () {
    const mensajeTextArea = document.getElementById('mensaje');
    const encriptarBtn = document.querySelector('.btn-encriptar');
    const desencriptarBtn = document.querySelector('.btn-desencriptar');
    const mensajeEncriptadoDiv = document.querySelector('.textoEncriptado');

    encriptarBtn.addEventListener('click', function () {
        const mensajeOriginal = mensajeTextArea.value.toLowerCase();
        if (mensajeOriginal.trim() === '') {
            alert('Por favor, ingrese un texto antes de encriptar.');
            return;
        }
        const mensajeEncriptado = encriptarMensaje(mensajeOriginal);
        mostrarResultadoEncriptado(mensajeEncriptado);
    });

    desencriptarBtn.addEventListener('click', function () {
        const mensajeEncriptado = mensajeTextArea.value.toLowerCase();
        if (mensajeEncriptado.trim() === '') {
            alert('Por favor, ingrese un texto antes de desencriptar.');
            return;
        }
        const mensajeOriginal = desencriptarMensaje(mensajeEncriptado);
        mostrarResultadoDesencriptado(mensajeOriginal);
    });

    function encriptarMensaje(mensaje) {
        let mensajeEncriptado = mensaje
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        return mensajeEncriptado;
    }
    function verificarContenido() {
        var contenido = document.getElementById('mensaje').value;
        var regex = /[A-ZáéíóúÁÉÍÓÚüÜ¡¿!@#$%^&*()_+={}\[\]:;<>,.?~\\/-]/g;
    
        if (regex.test(contenido)) {
            alert('Error: Solo se permiten letras minúsculas y sin acentos');
        }
    }
    
    document.querySelector('.btn-encriptar').addEventListener('click', verificarContenido);

    function desencriptarMensaje(mensajeEncriptado) {
        let mensajeOriginal = mensajeEncriptado
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        return mensajeOriginal;
    }

    function mostrarResultadoEncriptado(mensajeEncriptado) {
        mensajeEncriptadoDiv.innerHTML = `
            <textarea id="resultadoEncriptado" class="mensaje" readonly>${mensajeEncriptado}</textarea>
            <button class="btn-copiar">Copiar</button>
        `;

        const copiarBtn = document.querySelector('.btn-copiar');
        copiarBtn.addEventListener('click', function () {
            const resultadoEncriptadoTextArea = document.getElementById('resultadoEncriptado');
            resultadoEncriptadoTextArea.select();
            document.execCommand('copy');
        });
    }

    function mostrarResultadoDesencriptado(mensajeOriginal) {
        mensajeEncriptadoDiv.innerHTML = `
            <textarea id="resultadoDesencriptado" class="mensaje" readonly>${mensajeOriginal}</textarea>
            <button class="btn-copiar">Copiar</button>
        `;

        const copiarBtn = document.querySelector('.btn-copiar');
        copiarBtn.addEventListener('click', function () {
            const resultadoDesencriptadoTextArea = document.getElementById('resultadoDesencriptado');
            resultadoDesencriptadoTextArea.select();
            document.execCommand('copy');
        });
    }
});
