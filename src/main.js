// const model = document.querySelector('.model');
// const projectCard = document.querySelectorAll('.project-card');
// const projectCardImg = document.querySelector('.img img');
// console.log(projectCardImg);

// // display model card
// projectCard.forEach(card => {
//     card.addEventListener('click', (e) => {
//         const cardId = e.currentTarget.dataset.id;
//         console.log(cardId);
//         model.style.display = "block";
//         // display correct img
//         projectCardImg.src = `src/images/project${cardId}.png`;
//     });
// });

// // close overlay
// document.querySelector('.overlay').addEventListener('click', () => { model.style.display = "none"; });


const projectBtns = document.querySelector('.projects__sum');
const projectItems = document.querySelectorAll('.projects__item');
const projectImg = document.querySelector('.projects__img');
const btnAnimation = document.querySelector('.btn--animation');
const labels = document.querySelectorAll('.form-control label');


// btn span el
btnAnimation.insertAdjacentHTML('afterbegin', '<span></span><span></span><span></span><span></span>');

// show project img
projectBtns.addEventListener('click', (e) => {
    projectItems.forEach((item, i) => {
        if (e.target === item) {
            projectImg.src = `src/images/projectImg${i + 1}.png`;
            item.style.color = '#2f8eb6';
        } else {
            item.style.color = 'black';
        }

    });
});

// fade animation
const handleHover = function (e) {
    // console.log(e);
    if (e.target.classList.contains('projects__item')) {
        const link = e.target;
        console.log(e.target);
        const siblings = link.closest('.projects__sum').querySelectorAll('.projects__item');

        siblings.forEach(e => {
            if (e !== link) e.style.opacity = this;
            else if (e === link) e.style.letterSpacing = `${this}px`;
        });
    }
};
projectBtns.addEventListener('mouseover', handleHover.bind(0.3));
projectBtns.addEventListener('mouseout', handleHover.bind(1));;


// contact animation
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});
