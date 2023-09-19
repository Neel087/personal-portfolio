/* 
  File Name : navbar.js 
  Student Name : Neel Patel
  Student ID : 301404465
  Date 18 September 2023 
 */
const currentPageHref = window.location.href
const navItems = document.querySelectorAll('.nav-item')
navItems.forEach(item => {
    item.classList.remove('active')
    if (item.children[0].href === currentPageHref) {
        item.children[0].classList.add('active')
    }
})