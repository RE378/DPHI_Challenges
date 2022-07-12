const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav_sticky .nav_sticky_cont ul li");
window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop-sectionHeight/3)) {
      current = section.getAttribute("id");
    }
  });
  console.log(current);
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
$(document).ready(function(){
    $(".dd").hover(function(){
        var dropdownMenu = $(this).children(".dd");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});









