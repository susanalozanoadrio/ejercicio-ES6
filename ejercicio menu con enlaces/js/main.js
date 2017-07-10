const menuItems = [
  {name: 'Home', link:'home.html'},
  {name: 'Info', link:'info.html'},
  {name: 'About', link:'about.html'},
  {name: 'Contact', link:'contact.html'}
];

const menu = document.querySelector(".menu");
let menuContent="";
for (const name of menuItems){
  menuContent +=
  `<li><a href="${name.link}">${name.name}</a></li>`;
}
menu.innerHTML=menuContent;
