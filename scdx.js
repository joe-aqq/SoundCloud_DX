let DEBUG = true;
if(DEBUG){console.group("SOUNDCLOUD_DX_LOADING");}
(function window_call() {
    let content;
    let head;
    let l_try = false;
    
    let viewport_meta = document.createElement("meta");
    viewport_meta.setAttribute("name", "viewport");
    viewport_meta.setAttribute("content", "width=device-width, initial-scale=1");
    
    //--Website--
    let website_link = document.createElement("li");
    let website_url = document.createElement("a");
    website_url.setAttribute("class", "moreMenu__link");
    website_url.setAttribute("href", "http://www.joeaquiare.com/");
    website_url.setAttribute("id", "scdx__link");
    website_url.innerHTML = "SCDX: My Website";
    website_link.appendChild(website_url);
    //--SoundCloud--
    let soundcloud_link = document.createElement("li");
    let soundcloud_url = document.createElement("a");
    soundcloud_url.setAttribute("class", "moreMenu__link");
    soundcloud_url.setAttribute("href", "/brainfoam");
    soundcloud_url.setAttribute("id", "scdx__link");
    soundcloud_url.innerHTML = "SCDX: My SoundCloud";
    soundcloud_link.appendChild(soundcloud_url);

    init();
    //------------->
    function init(){
        printLog("Window has loaded.");

        content = document.querySelector("#content");
        head = document.querySelector("head");
        
        printLog("Appending content scaling meta tag...");
        head.appendChild(viewport_meta);
        printLog("Appended content scaling meta tag.");
        
        printLog("Changing home dialogue...");
        let home = document.querySelector(".header__navMenuItem");
        home.innerHTML = "Soundcloud DX";
        printLog("Home dialogue changed.");
        
        let more_button = document.querySelector(".header__moreButton");
        more_button.onclick = function() {
            l_try = !l_try;
            if(l_try) {
                requestAnimationFrame(addMenuLinks);
            }
        }
    }
    
    function addMenuLinks() {
        printLog("addMenuLinks() called. l_try: " + l_try);
        let settings_list = document.querySelectorAll(".moreMenu__list");
        let added = false;
        if(settings_list.length >= 2 && settings_list[2].children.length <= 2) {
            settings_list[2].appendChild(website_link);
            settings_list[2].appendChild(soundcloud_link);
            added = !added;
            printLog("Website links added.");
        } else {
            printLog("Website links addition failed.");
            requestAnimationFrame(addMenuLinks);
        }
        if(added)
            cancelAnimationFrame(addMenuLinks);
    }

    function printLog(s) {
        if(DEBUG) {
            console.info("%cSoundcloud_DX: " + s, "color: orange;");
        }
    }
        
})();
if(DEBUG){console.groupEnd("SOUNDCLOUD_DX");}