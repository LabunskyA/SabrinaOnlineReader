/**
 * Created by lina on 20.11.17.
 */
function getSabrinaSrc(id) {
    const sabrina_src = "http://www.sabrina-online.com/strips/SabOnline%PAGE.";

    var strid = id.toString();
    if (strid.length === 1)
        strid = "0"+strid;

    return sabrina_src.replace("%PAGE", strid) + "GIF";
}