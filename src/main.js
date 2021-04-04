'use strict';

// items
const projects = [
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
        live: "https://zeljkode.github.io/js-Bankist-web/",
        git: "https://github.com/ZeljkoDe/js-Bankist-web.git",
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
        desc: `A static website idea for travel agencies, created with a clean, modern layout using flexbox.`,
    },
    {
        id: 5,
        category: "Static",
        img: "src/images/project7a.png",
        live: "https://zeljkode.github.io/loruki-website/",
        git: "https://github.com/ZeljkoDe/loruki-website.git",
        desc: `A fake cloud hosting website, built with HTML5, CSS3 and Javascript. This is just the UI of the website that works with animations but has no working functionalities. `,
    },
    {
        id: 6,
        category: "Static",
        img: "src/images/project8a.png",
        live: "https://zeljkode.github.io/house-works-website/",
        git: "https://github.com/ZeljkoDe/house-works-website.git",
        desc: `Website idea for construction works.`,
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


const projectBtns = document.querySelector('.projects-sum');
const projectItems = document.querySelectorAll('.projects-item');
const projectImg = document.querySelector('.projects-img');
const projectImg2 = document.querySelector('.projects-img2');
const btnAnimation = document.querySelector('.btn--animation');
const labels = document.querySelectorAll('.form-control label');
const sectionCenter = document.querySelector('.filter-container');
const container = document.querySelector('.btn-nav');



// btn span el for resume
if (btnAnimation) {
    btnAnimation.insertAdjacentHTML('afterbegin', '<span></span><span></span><span></span><span></span>');
}

// show project img - home page
if (projectBtns) {
    projectBtns.addEventListener('click', (e) => {
        projectItems.forEach((item, i) => {
            if (e.target === item) {
                projectImg.src = `src/images/projectImg${i + 1}.png`;
                projectImg2.src = `src/images/projectImg${i + 1}.png`;
                item.style.color = '#2f8eb6';
            } else {
                item.style.color = 'black';
            }

        });
    });

    // fade animation
    const handleHover = function (e) {
        // console.log(e);
        if (e.target.classList.contains('projects-item')) {
            const link = e.target;
            const siblings = link.closest('.projects-sum').querySelectorAll('.projects-item');

            siblings.forEach(e => {
                if (e !== link) e.style.opacity = this;
                else if (e === link) e.style.letterSpacing = `${this}px`;
            });
        }
    };
    projectBtns.addEventListener('mouseover', handleHover.bind(0.3));
    projectBtns.addEventListener('mouseout', handleHover.bind(1));;

}

// contact form animation
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

// load items

if (sectionCenter) {
    dispayItems(projects);
    dispayButtons(projects);
}

// dispaly individual projects
function dispayItems(items) {
    let dispayItem = items.map(function (item) {

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
    dispayItem = dispayItem.join("");
    sectionCenter.innerHTML = dispayItem;
}

// dispaly filter btns
function dispayButtons() {
    const categories = projects.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['All']);
    const categoryBtns = categories.map(function (category) {
        return `<button class="btn-middle filter-btn" data-id=${category}>${category}</button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtn = document.querySelectorAll('.filter-btn');
    // filter items
    filterBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const projectsCategory = projects.filter(function (projectItem) {
                if (projectItem.category === category) {
                    return projectItem;
                }
            });
            if (category === 'All') {
                dispayItems(projects);
            } else {
                dispayItems(projectsCategory);
            }
        });
    });
}
