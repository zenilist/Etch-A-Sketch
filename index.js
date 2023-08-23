const container = document.querySelector(".grid-container");
for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add("grid-square");
    container.appendChild(div);
    div.addEventListener("mouseover", function(){
        div.style.backgroundColor = "black";
    })
}
// const grids = document.querySelectorAll(".grid-square")
