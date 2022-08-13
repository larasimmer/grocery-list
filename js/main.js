//VARIÁVEIS

const buttonMeat = $("#meat > .category-expand");
const buttonDairy = $("#dairy > .category-expand");
const buttonDriedGoods = $("#gried-goods > .category-expand");
const buttonVeggies = $("#veggies > .category-expand");
const buttonBread = $("#bread > .category-expand");
const buttonCleaners = $("#cleaners > .category-expand");
const buttonCare = $("#care > .category-expand");
const buttonBeverages = $("#beverages > .category-expand");
const buttonOthers = $("#others > .category-expand");

//CHAMANDO FUNÇÕES

$(".category").on("click", function() {
    $(this).css("height", "300px");
})

//DECLARANDO FUNÇÕES