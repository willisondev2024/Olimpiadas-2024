function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada item de dado na lista de resultados
    for (let dado of dados) {
        // Cria um novo elemento de resultado com as informações do dado atual
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui os resultados formatados à seção HTML
    section.innerHTML = resultados;
}







