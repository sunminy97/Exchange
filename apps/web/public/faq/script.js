// create an array with all the question divs

const questions = document.querySelectorAll('.question');

// add an event listener to each one of them

questions.forEach(item => {
    item.addEventListener('click', event => {

        // first, select all the answers and make sure they are hidden by adding the class 'hidden' to them

        let allAnswers = document.querySelectorAll('.answer');

        allAnswers.forEach(answerItem => {
            answerItem.classList.add('hidden');
        })

        questions.forEach(questionItem => {
            questionItem.classList.remove('bold');
        })

        let allArrows = document.querySelectorAll('.arrow');

        allArrows.forEach(arrowItem => {
            arrowItem.classList.remove('rotated');
        })

        // after that, select the next element to the clicked element, an answer one

        let answer = item.nextElementSibling;

        // then, toggle the class 'hidden' of it
        
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            item.classList.add('bold');
            let nextArrow = item.lastElementChild;
            nextArrow.classList.add('rotated');
        }
        
    })
})