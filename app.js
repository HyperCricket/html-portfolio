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

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
        Attachments: [
            {
                name: "File_Name_with_Extension",
                path: "Full Path of the file"
            }]
    })
        .then(function (message) {
            alert("Mail has been sent successfully")
        });
}

// http://ahrengot.com/tutorials/greensock-javascript-animation

var $cursor = $('.cursor');

function moveCursor(e) {
  $cursor.addClass('is-moving');
  
  TweenLite.to($cursor, 0.23, {
    left: e.pageX,
    top: e.pageY,
    ease: Power4.easOut
  });
  
  clearTimeout(timer);

   var timer = setTimeout(function() {
       $cursor.removeClass('is-moving');
   }, 300);
}

$(window).on('mousemove', moveCursor);