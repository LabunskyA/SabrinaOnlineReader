/**
 * Created by lina on 15.11.17.
 */
const strips = ["sabrina_online"];

const page = document.getElementById("page");
const buff = document.getElementById("buff");

const page_id = document.getElementById("id");

const width = window.innerWidth ||
    document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;

function init_page(strip) {
    switch (strip) {
        case strips[0]:
            page.onerror = function () { page.src = page.src.replace("GIF", "JPG"); };
            break;
    }
}

function get_strip_id(strip, id) {
    switch (strip) {
        case strips[0]:
            return getSabrinaSrc(id);
    }
}

//Main function, beware
function update() {
    page.src = get_strip_id(strips[0], id);
    buff.src = get_strip_id(strips[0], id + 1);

    page_id.value = "#" + id;
    localStorage.setItem(strips[0] + "_id", id);
}

//User need full control over his life
page_id.addEventListener('change', function () {
    id = parseInt(this.value.substr(1));
    update();
});

//Global variables are for gays. Give my one
var id = localStorage.getItem(strips[0] + "_id");
if (id === null)
    id = 1;

//Why not to have some more functions?
function next_page() {
    id++;
    update();
}

function prev_page() {
    id--;
    update();
}

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            prev_page();
            break;

        case 39:
            next_page();
            break;
    }
};

//Interactive clicking!
page.onclick = function () {
    if (event.screenX / width > 0.33)
        next_page();
    else prev_page();
};

//Buttons for nerds who can't click on the picture properly from IE 5
document.getElementById("next").onclick = function () { next_page() };
document.getElementById("previous").onclick = function () { prev_page() };


//To start things up
init_page("sabrina_online");
update();