let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header .navbar a'); // corrected selector
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // corrected property
        let offset = sec.offsetTop - 150; // corrected property
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // added quotes around 'id'
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active'); // corrected variable name
                document.querySelector('header .navbar a[href*="'+ id + '"]').classList.add('active'); // corrected selector and added add method
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



document.getElementById('email-link').addEventListener('click', () => {
    document.getElementById('email-modal').style.display = 'block';
});

document.getElementById('email-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('email-modal')) {
        document.getElementById('email-modal').style.display = 'none';
    }
});
