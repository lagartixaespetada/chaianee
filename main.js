function executarCodigo(linguagem) {
    const outputElement = document.getElementById(`output-${linguagem}`);
    outputElement.innerHTML = '';
    
    switch(linguagem) {
        case 'javascript':
            for (let i = 0; i < 5; i++) {
                outputElement.innerHTML += `Iteração: ${i}\n`;
            }
            break;
            
        case 'python':
            // Simulando o comportamento do Python em JavaScript
            for (let i = 0; i < 5; i++) {
                outputElement.innerHTML += `Iteração: ${i}\n`;
            }
            break;
            
        case 'php':
            // Simulando o comportamento do PHP em JavaScript
            for (let i = 0; i < 5; i++) {
                outputElement.innerHTML += `Iteração: ${i}\n`;
            }
            break;
            
        case 'cpp':
            // Simulando o comportamento do C++ em JavaScript
            for (let i = 0; i < 5; i++) {
                outputElement.innerHTML += `Iteração: ${i}\n`;
            }
            break;
    }
}

// Adicionando alguns exemplos de saída inicial
document.addEventListener('DOMContentLoaded', function() {
    const linguagens = ['javascript', 'python', 'php', 'cpp'];
    linguagens.forEach(lang => {
        const outputElement = document.getElementById(`output-${lang}`);
        outputElement.innerHTML = 'Clique em "Executar" para ver o resultado.';
    });
});