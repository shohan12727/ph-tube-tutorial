// alert('fuck cse ');


function loadCategories (){
    fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then ((res) => res.json())
    .then ((data) => displayCategories (data.categories));
}

function displayCategories (categories){
    const categoryContainer = document.getElementById("catagory-container");

    // loop
    for (let cat of categories){
        console.log(cat);
    

    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class = "btn btn-sm hover:bg-red-600 " > ${cat.category} </button>
    ` ;
    categoryContainer.appendChild(categoryDiv);
    }
}

loadCategories();
