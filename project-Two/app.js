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
    const output = document.getElementById("output");

    //step-4 handle click event
    btn.addEventListener('click', function () {
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    })
}

//step-2 random color generator function
function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;
}



