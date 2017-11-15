/**
 * Created by lina on 15.11.17.
 */
const src = "http://www.sabrina-online.com/strips/SabOnline%PAGE.";
const page = document.getElementById("page");
const page_id = document.getElementById("id");

//Main function, beware
function update() {
    var idval = id.toString();
    if (idval.length === 1)
        idval = "0"+idval;

    page.src = src.replace("%PAGE", idval) + "GIF";

    page_id.value = "#" + id;

    localStorage.setItem("sabrinaonline_id", id);
}

//User need full control over his life
page_id.addEventListener('change', function () {
    id = parseInt(this.value.substr(1));
    update();
});

//Global variables are for gays. Give my one
var id = localStorage.getItem("sabrinaonline_id");
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

page.onerror = function () {
    page.src = page.src.replace("GIF", "JPG");
}

//Interactive clicking!
page.onclick = function () {
    if (event.clientX / page.clientWidth > 0.33)
        next_page();
    else prev_page();
};

//Buttons for nerds who can't click on the picture properly from IE 5
document.getElementById("next").onclick = function () { next_page() };
document.getElementById("previous").onclick = function () { prev_page() };


//To start things up
update();