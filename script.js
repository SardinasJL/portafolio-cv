/**
 * Menu
 */
(
    function () {
        let btnMenu = document.getElementsByClassName("menu-btn")[0];
        let menu = document.getElementsByClassName("menu")[0];
        btnMenu.onclick = function () {
            btnMenu.firstElementChild.classList.toggle("none");
            btnMenu.lastElementChild.classList.toggle("none");
            menu.classList.toggle("is-active");
        }
        document.onclick = function (event) {
            if (event.target.matches(".menu a")) {
                btnMenu.firstElementChild.classList.remove("none");
                btnMenu.lastElementChild.classList.add("none");
                menu.classList.remove("is-active");
            }
        }
    }
)()
