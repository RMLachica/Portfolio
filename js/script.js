const navLinks = document.querySelectorAll("header nav a");
const logolink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

const activePage = () => {
    const header = document.querySelector("header");
    
    header.classList.remove("active");
    setTimeout(() => {
        header.classList.add("active")
    });


    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    sections.forEach(section => {
        section.classList.remove("active");
    });

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

navLinks.forEach((link,idx) => {
    link.addEventListener("click", () =>{
        if (!link.classList.contains("active")){
            activePage();

            link.classList.add("active");

            setTimeout(() => {
                sections[idx].classList.add("active");
            });
        }
    }); 
});

logolink.addEventListener("click", () => {
    if (!nav.Links[0].classList.contains("active")) {
        activePage();

        navLinks[0].classList.add("active");

        setTimeout(() => {
            sections[0].classList.add("active");
        });

    }
});