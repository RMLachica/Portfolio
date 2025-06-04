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

const arrowRight = document.querySelector(".achievements-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".achievements-box .navigation .arrow-left");

let index = 0;

const activeAchievements = () => {
    const imgSlide = document.querySelector('.achievements-carousel .img-slide');
    const achievementsDetails = document.querySelectorAll('.achievements-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    achievementsDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    achievementsDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if(index < 3) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 4;
        arrowRight.classList.add('disabled');
    }

    activeAchievements();
});

arrowLeft.addEventListener('click', () => {
    if(index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activeAchievements();
});