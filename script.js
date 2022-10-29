let menuVisible = false;

function toggleMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

function skillsEffect(){
    var skills = document.getElementById("skills"); 
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("porcentaje");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("bootstrap");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("nodeexpress");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("mysqlmongodb");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("adaptacion");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("resolucion");
    }
}

window.onscroll = function(){
    skillsEffect();
}