/*document.onwheel = function (event) {
    console.log(event);
    if (1450 < event.deltaY > 1865 ) {
       document.getElementById('list').scrollLeft += 15;
    }
}*/



$('#list').bind('mousewheel', function(event, delta) {
    if(delta ==1) {
        this.scrollLeft -= 200;
    }
    else {
        this.scrollLeft += 200;
    }
    event.preventDefault();
});

