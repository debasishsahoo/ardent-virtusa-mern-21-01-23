//! DOM is Access with javascript
//! IN DOM the HTML ELEMENT IS DEFIEND AS AN OBJECT
//! HTML DOM methods are actions 
//! HTML DOM properties are values

// setTimeout(() => {
//     document.body.innerHTML = 'I am the text from JAVASCRIPT itself'
// }, 5000)

//? Find to an HTML Element(used Methods)
//! document.getElementById(id); 

//! document.getElementsByTagName(name);

//! docuemnt.getElementsByClassName(name);


function changeText() {
    // console.log(document.getElementsByTagName('p'));
    // console.log(document.getElementsByTagName('p')[0]);
    console.log(document.getElementsByTagName('p')[0].innerHTML);
    console.log(document.getElementsByTagName('p')[0].innerText);


    // console.log(document.getElementsByTagName('div'));
    // console.log(document.getElementsByTagName('div')[0]);
    console.log(document.getElementsByTagName('div')[0].innerHTML);
    console.log(document.getElementsByTagName('div')[0].innerText);


    document.getElementsByTagName('p')[0].innerHTML = 'I am the text from JAVASCRIPT itself';
}

//? to Update an HTML Element with javascript

//properties 
//! element.innerHTML
//! element.attribute
//! element.style.property
//method
//! element.setAttribute(attribute,value) 



//! Common HTML Events:
//ToDo: onchange,onclick,onmouseover,onmouseout,onkeydown,onload


