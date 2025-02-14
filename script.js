 function viewPassage() {
    document.getElementById("passage-cont-content").style.display = "block"; 
 }

// async function viewPassage() {
//     const today = new Date().toLocaleDateString("en-US", {
//         month: "2-digit", day: "2-digit", year: "numeric"
//     }).replace(/\//g, "-");

//     if (passages[today]) {
//             document.getElementById("passage-entry-text").innerText = passagges[today].entry;
//             document.getElementById("passage-entry-img").src = passagges[today].image;
//             document.getElementById("passage-cont-content").style.display = "block"; 
//     } else {
//         document.getElementById("passage-cont-content").innterText = "what"; 
//     }
// }



document.addEventListener("DOMContentLoaded", function() {
    const today = new Date().toLocaleDateString("en-US", {
        month: "2-digit", day: "2-digit", year: "numeric"
    }).replace(/\//g, "-");

    document.getElementById("date-today").innerText = today;
    
    if (passages[today]) {
        document.getElementById("passage-entry-text").innerText = passages[today].entry;
        document.getElementById("passage-entry-img").src = passages[today].image;        
    } else {
        document.getElementById("passage-cont-content").innterText = "what"; 
    }
})

// const today = new Date().toLocaleDateString("en-US", {
//     month: "2-digit",
//     day: "2-digit",
//     year: "numeric"
// }).replace(/\//g, "-");

// document.getElementByClassName("date-today").innerText = "today";

