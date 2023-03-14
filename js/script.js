// this line looks for an element with id container and 
// assigs it to const container
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.style.cssText = 'border: solid black; background-color: pink;';

const h1 = document.createElement('h');
h1.classList.add('content');
h1.textContent = "I'm in a div";
content.appendChild(h1);

const p = document.createElement('p');
p.classList.add('content');
p.textContent = 'ME TOO!';
content.appendChild(p);

container.appendChild(content);
