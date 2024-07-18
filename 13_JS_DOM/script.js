
let firstParagraph = document.querySelector('p');
console.log(firstParagraph);


let para1 = document.querySelector('#para1');
let para2 = document.querySelector('#para2');
let para3 = document.querySelector('#para3');
let para4 = document.querySelector('#para4');
console.log(para1, para2, para3, para4);

let allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

allParagraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}:`, paragraph.textContent);
});

para4.textContent = 'Fourth Paragraph';

para1.setAttribute('class', 'para-class');
para2.id = 'new-para2';
para2.classList.add('para-class');
para3.className = 'para-class';
para4.classList.add('para-class');

allParagraphs.forEach((paragraph) => {
  paragraph.style.color = 'blue';
  paragraph.style.backgroundColor = 'lightgrey';
  paragraph.style.border = '1px solid black';
  paragraph.style.fontSize = '16px';
  paragraph.style.fontFamily = 'Arial';
});

allParagraphs.forEach((paragraph, index) => {
  if (index === 0 || index === 2) {
      paragraph.style.color = 'green';
  } else if (index === 1 || index === 3) {
      paragraph.style.color = 'red';
  }
});

allParagraphs.forEach((paragraph, index) => {
  paragraph.textContent = `This is paragraph ${index + 1}`;
  paragraph.id = `new-para${index + 1}`;
  paragraph.className = `new-para-class-${index + 1}`;
});