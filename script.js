/**
 * Created by lina on 15.11.17.
 */
const src = "http://www.sabrina-online.com/strips/SabOnline%PAGE.GIF";

var id = localStorage.getItem("sabrinaonline_id");
if (id === null)
    id = 10;

var page = document.getElementById("page");
var page_id = document.getElementById("id");

function update() {
    page.src = src.replace("%PAGE", id);
    page_id.value = "#" + (id - 10);

    localStorage.setItem("sabrinaonline_id", id);
}

page_id.addEventListener('change', function () {
    id = parseInt(this.value.substr(1)) + 10;
    update();
});

update();

function next_page() {
    id++;
    update();
}

function prev_page() {
    id--;
    update();
}

page.onclick = function () {
    if (event.clientX / page.clientWidth > 0.33)
        next_page();
    else prev_page();
};

document.getElementById("next").onclick = function () { next_page() };
document.getElementById("previous").onclick = function () { prev_page() };