// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

};


































// typing in home section by JS effect starts
var typed = new Typed(".typing-text", {
    strings: ["Frontend Development", "Backend Development", "Web Designing", "Full-Stack Web Development"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 500,
});