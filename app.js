const getUserSelectedText = () => {
    return window.getSelection().toString();
}

// notification to see if user reaches the end of the screen
window.onscroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight)
    {
        console.log("You are at the end of the page");
    }
} 

//scroll to top button
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
