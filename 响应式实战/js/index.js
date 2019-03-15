

function checkWindowScroll(){
    var scrollNum_Y = document.documentElement.scrollTop;
    var header = document.querySelector("header");
    var header_content = header.querySelector("#header");
    console.log(scrollNum_Y);
    if(scrollNum_Y > 30){
        header.setAttribute("class","fixed");
        header_content.setAttribute("class","header-after");
    }else{
        header.removeAttribute("class");
        header_content.setAttribute("class","header");
    }
}

document.onscroll = function(){
    checkWindowScroll();
};


window.onload = function(){

};