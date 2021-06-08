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

var op = { zoom: 5, center: basemap };

function initMap() {
    initMap1(1);
    initMap2(1);
    initMap3(1);
}

function initMap1(flag) {
    //OSM
    map1 = new google.maps.Map(document.getElementById("map1"), op);
    map2 = new google.maps.Map(document.getElementById("map2"), op);
    map3 = new google.maps.Map(document.getElementById("map3"), op);
    map4 = new google.maps.Map(document.getElementById("map4"), op);
    map5 = new google.maps.Map(document.getElementById("map5"), op);
    map6 = new google.maps.Map(document.getElementById("map6"), op);
    map7 = new google.maps.Map(document.getElementById("map7"), op);

    catmap(flag);
}

function initMap2(flag) {
    //POPULATION
    map8 = new google.maps.Map(document.getElementById("map8"), op);
    map9 = new google.maps.Map(document.getElementById("map9"), op);
    map10 = new google.maps.Map(document.getElementById("map10"), op);
    map11 = new google.maps.Map(document.getElementById("map11"), op);
    map12 = new google.maps.Map(document.getElementById("map12"), op);
    map13 = new google.maps.Map(document.getElementById("map13"), op);
    map14 = new google.maps.Map(document.getElementById("map14"), op);

    popmap(flag);
}

function initMap3(flag) {
    //NEAREST AMENITY
    map15 = new google.maps.Map(document.getElementById("map15"), op);
    map16 = new google.maps.Map(document.getElementById("map16"), op);
    map17 = new google.maps.Map(document.getElementById("map17"), op);
    map18 = new google.maps.Map(document.getElementById("map18"), op);
    map19 = new google.maps.Map(document.getElementById("map19"), op);
    map20 = new google.maps.Map(document.getElementById("map20"), op);
    map21 = new google.maps.Map(document.getElementById("map21"), op);

    nmap(flag);
}

function catmap(flag) {
    ban(1, flag, map1);
    che(1, flag, map2);
    del(1, flag, map3);
    gur(1, flag, map4);
    hyd(1, flag, map5);
    kol(1, flag, map6);
    mum(1, flag, map7);
}

function popmap(flag) {
    ban(2, flag, map8);
    che(2, flag, map9);
    del(2, flag, map10);
    gur(2, flag, map11);
    hyd(2, flag, map12);
    kol(2, flag, map13);
    mum(2, flag, map14);
}

function nmap(flag) {
    ban(3, flag, map15);
    che(3, flag, map16);
    del(3, flag, map17);
    gur(3, flag, map18);
    hyd(3, flag, map19);
    kol(3, flag, map20);
    mum(3, flag, map21);
}