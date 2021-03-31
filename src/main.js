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
if (btnAnimation) {
    btnAnimation.insertAdjacentHTML('afterbegin', '<span></span><span></span><span></span><span></span>');
}

// show project img
if (projectBtns) {
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

}



// contact animation
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

// projects btn - move
const prevBtn = document.querySelector('.slider__btn--left');
const nextBtn = document.querySelector('.slider__btn--right');
const slides = document.querySelectorAll('.item');



// const moveSlide = () => {
//     for (let i = 0; i < sliderItems.length; i++) {
//         sliderItems[i].style.transform = `translateX(357px)`;
//     }
// };

// projectBtnRight.addEventListener('click', moveSlide);
// ;

// const slides = document.querySelectorAll('.slide')
// const nextBtn = document.querySelector('.nextBtn')
// const prevBtn = document.querySelector('.prevBtn')
/*
let counter = 0;
nextBtn.addEventListener('click', function () {
    counter++;
    carousel();
});
prevBtn.addEventListener('click', function () {
    counter--;
    carousel();
});

function carousel() {
    if (counter < slides.length - 3) {
        nextBtn.style.visibility = 'visible';
    } else {
        nextBtn.style.visibility = 'hidden';
    }
    if (counter > 0) {
        prevBtn.style.visibility = 'visible';
    } else {
        prevBtn.style.visibility = 'hidden';
    }

    slides.forEach(function (slide) {
        const width = slide.getBoundingClientRect().width;
        slide.style.transform = `translateX(-${counter * width}px)`;
    });
}
// prevBtn.style.visibility = 'hidden';

document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowLeft') {
        counter++;
        carousel();
    } else if (e.key === 'ArrowRight') {
        counter--;
        carousel();
    }
});
*/

// const filterContainer = document.querySelector('.filter-container');
// const filterItems = document.querySelectorAll('.filter-item');
// const filterizr = new Filterizr('.filter-container');
// const options = {
//     animationDuration: 0.5, // in seconds
//     height: '75px',
//     margin: '0 auto',
//     width: '75px',
//     'z-index': 2,
// };
// options.height('auto');

// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
    {
        id: 1,
        category: "Dynamic",
        img: "src/images/project4a.png",
        live: "https://zeljkode.github.io/webcon-studio-site/",
        git: "https://github.com/ZeljkoDe/webcon-studio-site.git",
        desc: `One of the first websites I created from zero. It was created for a web development agency, the concept was a modern neon design.`,
    },
    {
        id: 2,
        category: "Dynamic",
        img: "src/images/project11a.png",
        live: "https://zeljkode.github.io/tamplated-road-trip/",
        git: "https://github.com/ZeljkoDe/tamplated-road-trip.git",
        desc: `Bankist - website created in the Jonas Schmedtmann javascript course. `,

    },
    {
        id: 3,
        category: "Dynamic",
        img: "src/images/project10a.png",
        live: "https://zeljkode.github.io/js-Bankist/",
        git: "https://github.com/ZeljkoDe/js-Bankist.git",
        desc: `Bankist - app created in the Jonas Schmedtmann javascript course. Log in info <br>user: zd, pin: 1111 <br>or <br>user: jd, pin: 2222`,
    },
    {
        id: 4,
        category: "Static",
        img: "src/images/project3a.png",
        live: "https://zeljkode.github.io/travel-website/",
        git: "https://github.com/ZeljkoDe/travel-website.git",
        desc: `A static website idea for travel agencies, created with a clean, modern layout with flexbox.`,
    },
    {
        id: 5,
        category: "Static",
        img: "src/images/project7a.png",
        live: "https://zeljkode.github.io/loruki-website/",
        git: "https://github.com/ZeljkoDe/loruki-website.git",
        desc: `A fake cloud hosting website, built with HTML5, CSS3 and Javascript. This is just the UI of the website that works with animations but, has no working functionalities. `,
    },
    {
        id: 6,
        category: "Static",
        img: "src/images/project8a.png",
        live: "https://zeljkode.github.io/house-works-website/",
        git: "https://github.com/ZeljkoDe/house-works-website.git",
        desc: ``,
    },
    {
        id: 7,
        category: "Dynamic",
        img: "src/images/project9a.png",
        live: "https://zeljkode.github.io/tamplated-road-trip/",
        git: "https://github.com/ZeljkoDe/tamplated-road-trip.git",
        desc: `Presentation-style template with big images and scroll effects. Recreated form templated.co`,
    },
    {
        id: 8,
        category: "Static",
        img: "src/images/project1a.png",
        live: "https://zeljkode.github.io/gaming-website/",
        git: "https://github.com/ZeljkoDe/gaming-website.git",
        desc: `Many video games have their own websites that play different roles. The idea behind this one isn't only content storage, but also a community platform for game lovers.`,
    },
];

const sectionCenter = document.querySelector('.filter-container');
const container = document.querySelector('.btn-nav');


// load items
window.addEventListener('DOMContentLoaded', function () {
    dispayMenuItems(menu);
    dispayMenuButtons(menu);
});




function dispayMenuItems(menuItems) {
    let dispayMenu = menuItems.map(function (item) {
        // console.log(item)

        return `<div class="item filtr-item">
                    <div class="img">
                        <img src=${item.img} alt="Project">
                        <p class="item-text">${item.desc}</p>
                    </div>
                    <a href=${item.live} target="_blank" class="btn-light" _>
                        <i class="fas fa-eye"></i> Project
                    </a>
                    <a href=${item.git} target="_blank" class="btn-dark">
                        <i class="fab fa-github"></i> Github
                    </a>
                </div>`;
    });
    dispayMenu = dispayMenu.join("");
    sectionCenter.innerHTML = dispayMenu;
    // console.log(dispayMenu)
}

function dispayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['All']);
    // console.log(categories)
    const categoryBtns = categories.map(function (category) {
        return `<button class="btn-middle filter-btn" data-id=${category}>${category}</button>`;
    }).join("");
    // console.log(categoryBtns)
    container.innerHTML = categoryBtns;
    const filterBtn = document.querySelectorAll('.filter-btn');
    // filter items
    filterBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            // console.log(category)
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            // console.log(menuCategory);
            if (category === 'All') {
                dispayMenuItems(menu);
            } else {
                dispayMenuItems(menuCategory);
            }
        });
    });
}
