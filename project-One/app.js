/**
 *  Project Requirement
 *  -- Change the body background RGB color by button  
 * 
 */

//step-1 create onload handler
window.onload = () => {
    main();
}
function main() {
    //step-3 collect all necessary reference
    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");

    //step-4 handle click event
    btn.addEventListener('click', function () {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}

//step-2 random color generator function
function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${blue}, ${green})`;
}



