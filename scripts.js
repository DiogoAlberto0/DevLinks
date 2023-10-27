
function toggleMode() {
    const body = document.querySelector('body')
    body.classList.toggle("light")


    const swichButtonSvgClass = document.getElementById("swich_button_svg").classList
    
    
    if(swichButtonSvgClass.contains("ph-sun")){
        swichButtonSvgClass.replace("ph-sun", "ph-moon")
    } else {
        swichButtonSvgClass.replace("ph-moon", "ph-sun")
    }
}