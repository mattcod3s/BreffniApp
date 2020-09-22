var x = window.matchMedia("(max-width: 415px)")
myFunction(x); // Call listener function at run time

x.addListener(myFunction); // Attach listener function on state changes

let breffniLogo = document.getElementById('logo');
let logoWidth = logo.getAttribute("width");

function myFunction(x) {
    if (x.matches) { // If media query matches
      logo.setAttribute("width", "358");
    } else {
        logo.setAttribute("width", "708");
        
    }
}



