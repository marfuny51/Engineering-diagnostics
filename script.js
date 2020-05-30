let elem = document.getElementById('list');

elem.onwheel = function (event) {
    console.log(event);
    if (1450 < event.deltaY > 1865 ) {
        elem.scrollLeft -= 200;
    }
    else {
        elem.scrollLeft += 200;
    }
    event.preventDefault();
}


