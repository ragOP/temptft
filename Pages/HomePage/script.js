
const stories = [
    {
        title: "Our work is a ",
        hedingSpan: "story of purpose",
        description:
            "Our commitment to fostering a culture that values diversity and inclusion (D&I) considers gender and ethnicity diversity as well as diversity of backgrounds, experiences and viewpoints.",
    },
    {
        title: "Our work is a ",
        hedingSpan: "story of purpose",
        description:
            "Growing up premature sparked a passion for healthcare within me, driving me to seek ways to improve health outcomes using cutting-edge technologies.",
    },
    {
        title: "Our work is a ",
        hedingSpan: "story of purpose",
        description:
            "We want all colleagues to achieve their full potential and career aspirations. We are committed to the development of our diverse, global workforce, enhancing their skills.",
    },
    {
        title: "My work is a story of ",
        hedingSpan: "problem solving",
        description:
            "At Thermo Fisher, I lead a team that uses digital cloud computing to deliver tracking and bioinformatics systems to our customers, which enables us to offer high-value, end-to-end solutions.",
    },
];

const images = ["../../Assets/Images/diversity.svg", "../../Assets/Images/Frame 395.png", "../../Assets/Images/girl.svg", "../../Assets/Images/stock.png"];
let storyIndex = 0;

function updateStory() {
    document.querySelector('.diversity-title').innerHTML = `${stories[storyIndex].title} <span>${stories[storyIndex].hedingSpan}</span>`;
    document.querySelector('.diversity-desc').textContent = stories[storyIndex].description;
    document.getElementById('story-index').textContent = storyIndex + 1;
}

function updateImage() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = `<img src="${images[storyIndex]}" alt="">`;
}

function previousSlide() {
    storyIndex = (storyIndex === 0) ? stories.length - 1 : storyIndex - 1;
    updateStory();
    updateImage();
}

function nextSlide() {
    storyIndex = (storyIndex + 1) % stories.length;
    updateStory();
    updateImage();
}

setInterval(nextSlide, 5000);

document.addEventListener('DOMContentLoaded', () => {
    updateStory();
    updateImage();
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuItems = document.querySelectorAll('.menu li');
    const logo = document.querySelector('.navlogo img');
    const searchIcon = document.querySelector('.search-icon img');
    const externalButton = document.querySelector('.button');
  
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const activeItem = document.querySelector('.menu li.active');
        if (activeItem) {
          activeItem.classList.remove('active');
        }
        item.classList.add('active');
      });
    });
  

    const toggleDropdown = (menuItem) => {
      menuItem.classList.toggle('open');
    };
  
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        toggleDropdown(item);
      });
    });
  
    const handleLogoChange = (isOpen) => {
      if (isOpen) {
        logo.src = '../../Assets/Images/logo1.png';
      } else {
        logo.src = '../../Assets/Images/logo.png';
      }
    };
  

    navbar.addEventListener('click', () => {
      const isOpen = document.querySelector('.menu li.open') !== null;
      handleLogoChange(isOpen);
    });
  

    searchIcon.addEventListener('click', () => {
      console.log('Search icon clicked');
    
    });
  

    externalButton.addEventListener('click', () => {
      window.open('https://www.thermofisher.com', '_blank');
    });
  });
  