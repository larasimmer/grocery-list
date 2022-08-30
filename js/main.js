//VARIÁVEIS

const expandButton = $(".category-expand");
const minimizeButton = $(".category-minimize");
const addItemButton = $(".add-item");
const addItemInput = $(".item-input");
let addedItem = $(".added-item");

//CHAMANDO FUNÇÕES

expandButton.on("click", function() {
    $(".add-items-container").show();
})

minimizeButton.on("click", function() {
    $(".add-items-container").hide();
})

addItemButton.on("click", function() {
    addItems.append("<ul class='items'><ul class='items-actions'><li class='checkbox'><input type='checkbox' id='check' value='bought'></li><li class='added-item'></li><li><i class='fa-solid fa-pen-to-square'></i></li><li><i class='fa-solid fa-xmark'></i></li></ul></ul><div><input class='item-input' type='text' id='item'><button class='add-item'>Add</button></div>");
})

//DECLARANDO FUNÇÕES