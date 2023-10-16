

// Function to simulate typing animation---------
function typeWriter(textElement, texts, delay) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            textElement.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

          // Apply different color to the text during animation--------
          textElement.style.color = '#1E1E1E';

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            if (textIndex === texts.length) {
                textIndex = 0;
            }
        } else if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
        }

        setTimeout(type, delay);
    }

    setTimeout(type, delay);
}

// Call the typing animation function----------
const textElement = document.getElementById('typing-animation');
const texts = [
    'Developer',
    'Problem Solver',
    'Software Engineer',
    'Quick learner'
];
typeWriter(textElement, texts, 100); 


//Burger----

burger=document.querySelector('.burger')

navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')


burger.addEventListener('click',()=>{
    
     navlist.classList.toggle('v-class-resp')
     navbar.classList.toggle('h-nav-resp')

});



