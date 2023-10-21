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


// Dropdown menu
const menuicon = document.querySelector('#menu-icon');
const dropdownmenu = document.querySelector('.dropdown_menu');

menuicon.onclick = function () {
    dropdownmenu.classList.toggle('open')
    const isopen = dropdownmenu.classList.contains('open')
    menuicon.classList = isopen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}



// for contact form
var batan = document.getElementById('batan');
batan.addEventListener('click',function(e){
    e.preventDefault()
    Email.send({
        SecureToken: "45799385-f8cb-4055-bdea-6ae0ffcfb8bb",
        To : 'maneshsingh879@gmail.com',
        From : 'maneshsingh4743@gmail.com',
        Subject : document.getElementById("emailsubject").value,
        Body : "Name :" + " " + document.getElementById("name").value
               + "<br> Phone No. :" + " " + document.getElementById("phone").value
               + "<br> Email :" + " " + document.getElementById("email").value
               + "<br> Subject :" + " " + document.getElementById("msg").value
    }).then(
      message => {
        if(message=='OK'){
            swal("Yay!", "Message Sent Successfully!", "success");
        }
        else{
            swal("Something Went Wrong!", "Try again!", "error");
        }
      }
    );
})
    


































// typing in home section by JS effect starts
var typed = new Typed(".typing-text", {
    strings: ["Frontend Development", "Backend Development", "Web Designing", "Full-Stack Web Development"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 500,
});