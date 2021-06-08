let map;
let infoWindow;
let dataArr;
var colArr = [];

var map1, map2, map3, map4, map5, map6, map7;
var map8, map9, map10, map11, map12, map13, map14;
var map15, map16, map17, map18, map19, map20, map21;

var basemap = { lat: 20.59, lng: 78.96 }
var bangalore = { lat: 12.97, lng: 77.59 }
var chennai = { lat: 13.08, lng: 80.27 }
var delhi = { lat: 28.61, lng: 77.21 }
var gurgaon = { lat: 28.46, lng: 77.03 }
var hyderabad = { lat: 17.38, lng: 78.49 }
var kolkata = { lat: 22.57, lng: 88.36 }
var mumbai = { lat: 19.08, lng: 72.88 }

function initMap() {
    var op = {
        zoom: 5,
        center: basemap
    }

    //OSM
    map1 = new google.maps.Map(document.getElementById("map1"), op);
    ban(1, 1, map1);

    map2 = new google.maps.Map(document.getElementById("map2"), op);
    che(1, 1, map2);

    map3 = new google.maps.Map(document.getElementById("map3"), op);
    del(1, 1, map3);

    map4 = new google.maps.Map(document.getElementById("map4"), op);
    gur(1, 1, map4);

    map5 = new google.maps.Map(document.getElementById("map5"), op);
    hyd(1, 1, map5);

    map6 = new google.maps.Map(document.getElementById("map6"), op);
    kol(1, 1, map6);

    map7 = new google.maps.Map(document.getElementById("map7"), op);
    mum(1, 1, map7);

    //POPULATION
    map8 = new google.maps.Map(document.getElementById("map8"), op);
    ban(2, 1, map8);

    map9 = new google.maps.Map(document.getElementById("map9"), op);
    che(2, 1, map9);

    map10 = new google.maps.Map(document.getElementById("map10"), op);
    del(2, 1, map10);

    map11 = new google.maps.Map(document.getElementById("map11"), op);
    gur(2, 1, map11);

    map12 = new google.maps.Map(document.getElementById("map12"), op);
    hyd(2, 1, map12);

    map13 = new google.maps.Map(document.getElementById("map13"), op);
    kol(2, 1, map13);

    map14 = new google.maps.Map(document.getElementById("map14"), op);
    mum(2, 1, map14);

    //NEAREST AMENITY
    map15 = new google.maps.Map(document.getElementById("map15"), op);
    ban(3, 1, map15);

    map16 = new google.maps.Map(document.getElementById("map16"), op);
    che(3, 1, map16);

    map17 = new google.maps.Map(document.getElementById("map17"), op);
    del(3, 1, map17);

    map18 = new google.maps.Map(document.getElementById("map18"), op);
    gur(3, 1, map18);

    map19 = new google.maps.Map(document.getElementById("map19"), op);
    hyd(3, 1, map19);

    map20 = new google.maps.Map(document.getElementById("map20"), op);
    kol(3, 1, map20);

    map21 = new google.maps.Map(document.getElementById("map21"), op);
    mum(3, 1, map21);
}

function catmap(flag) {
    ban(1, flag, map1);

    //map2 = new google.maps.Map(document.getElementById("map2"), op);
    che(1, flag, map2);

    //map3 = new google.maps.Map(document.getElementById("map3"), op);
    del(1, flag, map3);

    //map4 = new google.maps.Map(document.getElementById("map4"), op);
    gur(1, flag, map4);

    //map5 = new google.maps.Map(document.getElementById("map5"), op);
    hyd(1, flag, map5);

    //map6 = new google.maps.Map(document.getElementById("map6"), op);
    kol(1, flag, map6);

    //map7 = new google.maps.Map(document.getElementById("map7"), op);
    mum(1, flag, map7);
}