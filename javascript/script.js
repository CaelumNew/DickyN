//toogle icon navbar
let menuicon = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    Navbar.classList.toggle('active');

}

//scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => { 
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
            //sesi aktif untuk animasi 
            sec.classList.add('show-animate');
        }
        //kalau mau pake animasi yang berulang  saat scroll pake ini
        else {
            sec.classList.remove('show-animate');
        }
    });


    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toogle icon when scrolls//
    menuicon.classList.remove('bx-x');
    Navbar.classList.remove('active');


}



var icon = document.getElementById("icon");

icon.onclick = function() {
        document.body.classList.toggle("darkmode");
        if(document.body.classList.contains("darkmode")){
            icon.src = "icon/sun.png";
        }
        else{
            icon.src = "icon/dark1.png";
        }
}



