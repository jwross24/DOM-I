const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  'cta': {
    'h1': 'DOM Is Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4': 'Contact',
    'address': '123 Way 456 Street Somewhere, USA',
    'phone': '1 (888) 888-8888',
    'email': 'sales@greatidea.io',
  },
  'footer': {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Header
let navItems = document.querySelectorAll('nav a');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent['nav']['nav-item-' + (i + 1)];
}

// Call to Action Section
document.querySelector('.cta-text h1').innerHTML = siteContent['cta'][
  'h1'
].replaceAll(' ', '<br> ');
document.querySelector('.cta-text button').textContent =
  siteContent['cta']['button'];
document.getElementById('cta-img').src = siteContent['cta']['img-src'];

document.getElementById('middle-img').src =
  siteContent['main-content']['middle-img-src'];

// Main Content Section
const contentNames = ['features', 'about', 'services', 'product', 'vision'];
const contentTypes = ['h4', 'p'];

function convertType(type) {
  return type === 'p' ? 'content' : type;
}

contentNames.forEach(function (name, index) {
  if (index < 2) {
    contentTypes.forEach(function (type) {
      let type2 = convertType(type);
      document.querySelectorAll('.top-content .text-content ' + type)[
        index
      ].textContent = siteContent['main-content'][`${name}-${type2}`];
    });
  } else {
    contentTypes.forEach(function (type) {
      let type2 = convertType(type);
      document.querySelectorAll('.bottom-content .text-content ' + type)[
        index - 2
      ].textContent = siteContent['main-content'][`${name}-${type2}`];
    });
  }
});

// Contact section
contactSectionHeader = document.querySelector('.contact h4');
contactSectionHeader.textContent = siteContent['contact']['contact-h4'];

contactSectionP = document.querySelectorAll('.contact p');
contactData = ['address', 'phone', 'email'];
contactData.forEach(function (item, index) {
  if (item === 'address') {
    contactSectionP[index].innerHTML = siteContent['contact'][item].replace(
      'Street ',
      'Street <br>',
    );
  } else {
    contactSectionP[index].textContent = siteContent['contact'][item];
  }
});

// Footer
document.querySelector('footer p').textContent =
  siteContent['footer']['copyright'];

// Add new items to the nav bar with .prepend or .appendChild
let headerNav = document.querySelector('header nav');

let home = document.createElement('a');
home.href = '#';
home.textContent = 'Home';
headerNav.prepend(home);

let seeMore = document.createElement('a');
seeMore.href = '#';
seeMore.textContent = 'See More';
headerNav.appendChild(seeMore);

// Change nav text to green
let headerNavA = document.querySelectorAll('header nav a');
headerNavA.forEach((item) => (item.style.color = 'green'));

let mainContent = document.getElementsByClassName('main-content')[0];
let testButton = document.createElement('button');
testButton.textContent = 'Click me!';
mainContent.prepend(testButton);

function toggleDate() {
  let dateBox = document.querySelectorAll('.cta-text .date-box');
  if (dateBox.length) {
    document.querySelector('.cta-text').removeChild(dateBox[0]);
  } else {
    let d = new Date();
    dateBox = document.createElement('div');
    dateBox.setAttribute('class', 'date-box');
    dateBox.innerHTML = d.getTime();
    document.querySelector('.cta-text').appendChild(dateBox);
  }
}

testButton.addEventListener('click', toggleDate);
