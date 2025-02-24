function x() {
    // Conteúdo do arquivo
    const content = "Este é o conteúdo do arquivo."; //alterar para mudar o conteudo do arquivo
    
    // Cria um Blob com o conteúdo
    const blob = new Blob([content], { type: 'text/plain' });

    // Cria uma URL para o Blob
    const url = URL.createObjectURL(blob);

    // Cria um elemento <a> temporário
    const a = document.createElement('a');
    a.href = url;
    a.download = 'arquivo.txt'; // Nome do arquivo a ser baixado

    // Adiciona o elemento <a> ao DOM e clica nele para iniciar o download
    document.body.appendChild(a);
    a.click();

    // Remove o elemento <a> do DOM
    document.body.removeChild(a);
}