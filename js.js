var aboutOpenButton = document.getElementById('about-open-button');
var aboutDrawer = document.getElementById('about-drawer');
var aboutCloseButton = document.getElementById('about-close-button');
var openListButton = document.getElementById('list-open-button');
var aboutCloseButton1 = document.getElementById('about-close-button1')
var list = document.getElementById('list');

aboutOpenButton.onclick = function(){
	aboutDrawer.classList.add("open");
};

aboutCloseButton.onclick = function(){
	aboutDrawer.classList.remove("open");
};
aboutCloseButton1.onclick = function(){
    list.classList.remove("open")
}
openListButton.onclick = function(){
    list.classList.add("open");
};