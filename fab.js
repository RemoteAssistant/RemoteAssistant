function fabMenu() {
    var fabMenu = document.getElementById("fab-menu");
    
    if (fabMenu != undefined) {
        var index = fabMenu.className.indexOf("open");
        if (index == -1){
            fabMenu.className = fabMenu.className + " open";
        }
        else {
            fabMenu.className = fabMenu.className.replace('open', '').replace('  ', ' ');
        }
    }
}