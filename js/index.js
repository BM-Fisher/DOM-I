const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

console.log(siteContent)

// Nav Bar
const navBar = document.querySelectorAll('a')
console.log('Nav Links', navBar);
navBar[0].textContent = siteContent['nav'] ['nav-item-1']
navBar[1].textContent = siteContent['nav'] ['nav-item-2']
navBar[2].textContent = siteContent['nav'] ['nav-item-3']
navBar[3].textContent = siteContent['nav'] ['nav-item-4']
navBar[4].textContent = siteContent['nav'] ['nav-item-5']
navBar[5].textContent = siteContent['nav'] ['nav-item-6']

// Turning Links Green
navBar.forEach(link => {
  link.style.color = '#0DD54E'
}
)

// Parent for Append and Prepend
const parentNav = document.querySelector('nav')
console.log('Parent Nav', parentNav)
// Append
const appendLink = document.createElement('a')
console.log('New Link for Append', appendLink)
appendLink.textContent = 'Back'
// console.log('Text for Append Link', appendLink)
parentNav.appendChild(appendLink)
// Prepend
const prependLink = document.createElement('a')
console.log('New Link for Prepend', prependLink)
prependLink.textContent = 'Front'
// console.log('Text for Prepend Link', prependLink)
parentNav.prepend(prependLink)

// CTA
const ctaImg = document.querySelector('#cta-img')
console.log('CTA Circle Img', ctaImg);
ctaImg.src = siteContent['cta'] ['img-src']

const h1 = document.querySelector('h1')
console.log('CTA h1', h1);
h1.textContent = 'dom\n is\n awesome'
h1.style.whiteSpace = 'pre'

const ctaBtn = document.querySelector('.cta-text button')
console.log('Cta Button', ctaBtn);
ctaBtn.textContent = siteContent['cta'] ['button']

// Main Content
const h4Titles = document.querySelectorAll('.main-content h4')
console.log('Main Content Titles', h4Titles);
h4Titles[0].textContent = siteContent['main-content'] ['features-h4']
h4Titles[1].textContent = siteContent['main-content'] ['about-h4']
h4Titles[2].textContent = siteContent['main-content'] ['services-h4']
h4Titles[3].textContent = siteContent['main-content'] ['product-h4']
h4Titles[4].textContent = siteContent['main-content'] ['vision-h4']

const mainContent = document.querySelectorAll('.main-content p')
console.log('Main Content Text', mainContent)
mainContent[0].textContent = siteContent['main-content'] ['features-content']
mainContent[1].textContent = siteContent['main-content'] ['about-content']
mainContent[2].textContent = siteContent['main-content'] ['services-content']
mainContent[3].textContent = siteContent['main-content'] ['product-content']
mainContent[4].textContent = siteContent['main-content'] ['vision-content']

const midImg = document.querySelector('.middle-img')
console.log('Middle Img', midImg);
midImg.src = siteContent['main-content'] ['middle-img-src']

// Contact
const contactTitle = document.querySelector('.contact h4')
console.log('contact title', contactTitle); 
contactTitle.textContent = siteContent['contact'] ['contact-h4']

const contactContent = document.querySelectorAll('.contact p')
console.log('contact section content', contactContent);
contactContent[0].textContent = '123 Way 456 Street\n Somewhere, USA' 
contactContent[0].style.whiteSpace = 'pre'
contactContent[1].textContent = siteContent['contact'] ['phone']
contactContent[2].textContent = siteContent['contact'] ['email']

// Footer
const footer = document.querySelector('footer p')
console.log('Footer', footer)
footer.textContent = siteContent['footer'] ['copyright']

// Stretch
const two4One = function() {
  appendLink.style.color = '#7ECDE1';
  appendLink.style.textTransform = 'upperCase';
  prependLink.style.color = '#7ECDE1';
  prependLink.style.textTransform = 'upperCase';
}
two4One();

navBar.forEach(element => {
  element.style.textTransform = 'upperCase';
})

mainContent.forEach(text => {
  text.style.color= '#2F3656';
})

h4Titles.forEach(title => {
  title.style.color = '#fdce41';
})

ctaBtn.addEventListener('mouseenter', (event) => {
  event.target.style.textTransform = 'upperCase';
  event.target.style.backgroundColor = '#77BDD1';
})

ctaBtn.addEventListener('mouseleave', (event) => {
  event.target.style.textTransform = 'capitalize';
  event.target.style.backgroundColor = 'white';
})

ctaBtn.addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#16DB4E';
  console.log('Button Clicked');
})