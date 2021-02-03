const pageState = function(){
  let currentState = new homeState(this);

  this.init = function(){
    this.change(new homeState);
  }

  this.change = function(state){
    currentState = state;
  }
};

const homeState = function(page){
  document.querySelector('#heading').textContent = 'Home Page';
  document.querySelector('#content').textContent = 'This is the homepage';
};
const aboutState = function(page){
  document.querySelector('#heading').textContent = 'About Page';
  document.querySelector('#content').textContent = 'This is the about page';
};
const contactState = function(page){
  document.querySelector('#heading').textContent = 'Contact Page';
  document.querySelector('#content').textContent = 'This is the Contact Page';
};

// Init pageState

const page = new pageState();

// Init state
page.init();

// UI vars
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

home.addEventListener('click',e=>{
  page.change(new homeState());
  e.preventDefault();
});

about.addEventListener('click',e=>{
  page.change(new aboutState());
  e.preventDefault();
});

contact.addEventListener('click',e=>{
  page.change(new contactState());
  e.preventDefault();
});