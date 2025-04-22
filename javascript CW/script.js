document.querySelectorAll(".child"). forEach(function (element) {   
    if (element.innerText.toLowerCase().includes("durant")) {
       element.style.backgroundColor = "blue";
    } else {
       element.style.backgroundColor = "black";
    }
});