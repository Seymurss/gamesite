const twitchLink  = document.getElementById("twitch");
const youtubeLink = document.getElementById("youtube");
const mixerLink   = document.getElementById("mixer");
const title       = document.querySelector(".info h3");
const redlink     = document.querySelector(".redlink");
const whitelink   = document.querySelector(".whitelink")

twitchLink.addEventListener("click", function () {
    title    .textContent = "DESTINY 2 GAMEPLAY";
    redlink  .textContent = "oyakkodon";
    whitelink.textContent = "Twitch"
});

youtubeLink.addEventListener("click", function () {
    title.textContent = "DOTA2 LIVE";
    redlink.textContent = "kasP";
    whitelink.textContent = "YouTube"
});

mixerLink.addEventListener("click", function () {
    title.textContent = "FORTNITE LIVE";
    redlink.textContent = "oyakkdown";
    whitelink.textContent = "Mixer"
});


const specs        =  document.getElementById("specs");
const trophies     =  document.getElementById("trophies");
const achievements =  document.getElementById("achievements")

const info         = document.getElementById("info");


specs.addEventListener("click", function(){
    info.textContent ="Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus nihil."
});

trophies.addEventListener("click", function(){
    info.textContent ="Maecenas tempus, tellus eget condimentum rhoncus? Nam quam nunc, blandit vel luctus pulvinar, hendrerit id lorem. Maecenas nec odio et ante tincidunt tempus vitae sapien ut libero? Venenatis faucibus. Etiam amet orci et aliquam lorem ante, dapibus in, viverra quis. Phasellus viverra nulla ut metus varius laoreet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi."
});

achievements.addEventListener("click", function(){
    info.textContent ="Nulla consequat massa quis enim. Donec pede justo vel, aliquet nec vulputate eget, arcu. In enim justo, rhoncus venenatis vitae justo. Nullam dictum, felis eu pede mollis pretium. Integer tincidunt et lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis theme natoque penatibus et magnis dis parturient mus montes, nascetur ridiculus."
});




document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById("sidebar");
    const sidebox = document.getElementById("sidebox");
    const sidebarclose = document.getElementById("sidebarclose");

    const searchIcon = document.getElementById("searchIcon");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");
    const closeIcon = document.getElementById("closeIcon");

    sidebar.addEventListener('click', function () {
        sidebox.style.left = '0'; 
    });
    sidebarclose.addEventListener('click', function () {
        sidebox.style.left = '100%'; 
    });


    closeIcon.addEventListener('click', function () {
        searchBox.style.display = 'none';
        searchInput.value = '';
    });


    searchIcon.addEventListener('click', function () {
        searchBox.style.display = 'block';
    });

    const backToTopBtn = document.getElementById("backToTopBtn");







    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });


    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) { 
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });
        
});






