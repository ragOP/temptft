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

const images = ["../Assets/Images/diversity.svg", "../Assets/Images/Frame 395.png", "../Assets/Images/girl.svg", "../Assets/Images/stock.png"];
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

document.addEventListener("DOMContentLoaded", function () {
  const dropdownHeaders = document.querySelectorAll('.dropdown-header');
  let activeMenu = null;

  dropdownHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const menuTitle = this.querySelector('.heder-drop').innerText;
      const submenu = this.nextElementSibling;

      if (activeMenu === menuTitle) {
        activeMenu = null;
        this.classList.remove('active');
        submenu.classList.remove('visible');
      } else {
        if (activeMenu) {
          const activeHeader = document.querySelector('.dropdown-header.active');
          const activeSubmenu = activeHeader.nextElementSibling;

          activeHeader.classList.remove('active');
          activeSubmenu.classList.remove('visible');
        }
        activeMenu = menuTitle;
        this.classList.add('active');
        submenu.classList.add('visible');
      }
    });
  });



  const submenuItems = document.querySelectorAll('.submenu p');
  submenuItems.forEach(item => {
    item.addEventListener('click', function () {
      const link = this.getAttribute('data-link');
      const currentPath = window.location.pathname;

      if (currentPath === link) {
        window.location.reload();
      } else {
        window.location.href = link;
      }
    });


    const dropdown = document.getElementById("dropdown");
      const about = document.getElementById("about-link");

      if(dropdown.style.display === "block"){
        about.classList.add("on");
      }else{
        about.classList.add("on");
      }
      about.addEventListener("click", () => {
        if(dropdown.style.display === "block"){
          dropdown.style.display = "none";
          about.classList.add("on");
        }else{
          dropdown.style.display = "block";
          about.classList.add("on");
        }
       
      });

  });

});
