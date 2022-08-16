//VARIÁVEIS

const expandButton = $(".category-expand");
const minimizeButton = $(".category-minimize");

//CHAMANDO FUNÇÕES

expandButton.on("click", function() {
    $(this).parent().parent().parent().css("height", "300px");
})

minimizeButton.on("click", function() {
    $(this).parent().parent().parent().css("height", "80px");
})

//DECLARANDO FUNÇÕES