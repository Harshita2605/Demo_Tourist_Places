let map;
let infoWindow;
let dataArr;
var gtype;
var colArr = [];

var map1, map2, map3, map4, map5, map6, map7;
var map8, map9, map10, map11, map12, map13, map14;
var map15, map16, map17, map18, map19, map20, map21;
var map22, map23, map24, map25, map26, map27, map28;
var map29, map30, map31, map32, map33, map34, map35;

var basemap = { lat: 20.59, lng: 78.96 };
var bangalore = { lat: 12.93, lng: 77.57 };
var chennai = { lat: 13.04, lng: 80.24 };
var delhi = { lat: 28.64, lng: 77.08 };
var gurgaon = { lat: 28.37, lng: 76.93 };
var hyderabad = { lat: 17.38, lng: 78.46 };
var kolkata = { lat: 22.55, lng: 88.34 };
var mumbai = { lat: 19.08, lng: 72.88 };

var op = { zoom: 5, center: basemap };

function initMap(flag) {
    if (flag == 1) initMap1(1);
    else if (flag == 2) initMap2(1);
    else if (flag == 3) initMap3(1);
    else if (flag == 4) initMap4(1);
    else if (flag == 5) initMap5(1);
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

    console.log("hello1");
    catmap(flag);

    divid("legend1", "map1");
    divid("legend2", "map2");
    divid("legend3", "map3");
    divid("legend4", "map4");
    divid("legend5", "map5");
    divid("legend6", "map6");
    divid("legend7", "map7");

    /* const div = document.createElement("div");
    div.setAttribute("class", "legend");
    div.setAttribute("id", "legend1");
    document.getElementById("map1").appendChild(div);

    div.setAttribute("id", "legend2");
    document.getElementById("map2").appendChild(div);

    div.setAttribute("id", "legend3");
    document.getElementById("map3").appendChild(div);

    div.setAttribute("id", "legend4");
    document.getElementById("map4").appendChild(div);

    div.setAttribute("id", "legend5");
    document.getElementById("map5").appendChild(div); */

    console.log("hello2");
    makeLegend1("legend1", map1, flag);
    makeLegend1("legend2", map2, flag);
    makeLegend1("legend3", map3, flag);
    makeLegend1("legend4", map4, flag);
    makeLegend1("legend5", map5, flag);
    makeLegend1("legend6", map6, flag);
    makeLegend1("legend7", map7, flag);
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

function initMap4(flag) {
    //NUM AMENITY
    map22 = new google.maps.Map(document.getElementById("map22"), op);
    map23 = new google.maps.Map(document.getElementById("map23"), op);
    map24 = new google.maps.Map(document.getElementById("map24"), op);
    map25 = new google.maps.Map(document.getElementById("map25"), op);
    map26 = new google.maps.Map(document.getElementById("map26"), op);
    map27 = new google.maps.Map(document.getElementById("map27"), op);
    map28 = new google.maps.Map(document.getElementById("map28"), op);

    nummap(flag);
}

function initMap5(flag) {
    //POP LOAD
    map29 = new google.maps.Map(document.getElementById("map29"), op);
    map30 = new google.maps.Map(document.getElementById("map30"), op);
    map31 = new google.maps.Map(document.getElementById("map31"), op);
    map32 = new google.maps.Map(document.getElementById("map32"), op);
    map33 = new google.maps.Map(document.getElementById("map33"), op);
    map34 = new google.maps.Map(document.getElementById("map34"), op);
    map35 = new google.maps.Map(document.getElementById("map35"), op);

    loadmap(flag);
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

function nummap(flag) {
    ban(3, flag, map22);
    che(3, flag, map23);
    del(3, flag, map24);
    gur(3, flag, map25);
    hyd(3, flag, map26);
    kol(3, flag, map27);
    mum(3, flag, map28);
}

function loadmap(flag) {
    ban(4, flag, map29);
    che(4, flag, map30);
    del(4, flag, map31);
    gur(4, flag, map32);
    hyd(4, flag, map33);
    kol(4, flag, map34);
    mum(4, flag, map35);
}

function makeLegend1(legendid, map, flag) {
    console.log("hello2.5");
    const legend = document.getElementById(legendid);

    console.log(legend);
    //1 GridType
    //2 ClassLabel
    //3 ThreeWays
    //4 FourWays
    //8 Walkability

    if (flag == 1) {
        const div = document.createElement("div");
        div.innerHTML =
            '<div style="background-color:#000000">' + 'Rejected' + '</div>' +
            '<div style="background-color:#453781">' + 'Urban' + '</div>' +
            '<div style="background-color:#3CBB75">' + 'PeriUrban' + '</div>' +
            '<div style="background-color:#FFFFFF">' + 'Rural' + '</div>';
        legend.appendChild(div);
    } else if (flag == 2) {
        const div = document.createElement("div");
        div.innerHTML =
            '<div style="background-color:#444444">' + 'Class Label 0' + '</div>' +
            '<div style="background-color:#481567">' + 'Class Label 1' + '</div>' +
            '<div style="background-color:#453781">' + 'Class Label 2' + '</div>' +
            '<div style="background-color:#39569C">' + 'Class Label 3' + '</div>' +
            '<div style="background-color:#2D708E">' + 'Class Label 4' + '</div>' +
            '<div style="background-color:#238A8D">' + 'Class Label 5' + '</div>';
        legend.appendChild(div);
    } else if (flag == 3) {
        const div = document.createElement("div");
        div.innerHTML =
            '<div style="background-color:#444444">' + '0 - 50' + '</div>' +
            '<div style="background-color:#481567">' + '50 - 100' + '</div>' +
            '<div style="background-color:#453781">' + '100 - 150' + '</div>' +
            '<div style="background-color:#39569C">' + '150 - 200' + '</div>' +
            '<div style="background-color:#2D708E">' + '200 - 250' + '</div>' +
            '<div style="background-color:#238A8D">' + '250 - 300' + '</div>' +
            '<div style="background-color:#20A387">' + '300 - 350' + '</div>' +
            '<div style="background-color:#3CBB75">' + '350 - 400' + '</div>' +
            '<div style="background-color:#95D840">' + '400 - 450' + '</div>' +
            '<div style="background-color:#FDE725">' + '450 - 500' + '</div>' +
            '<div style="background-color:#FFFF99">' + '> 500' + '</div>';

        legend.appendChild(div);
    } else if (flag == 4) {
        const div = document.createElement("div");
        div.innerHTML =
            '<div style="background-color:#444444">' + '0 - 10' + '</div>' +
            '<div style="background-color:#481567">' + '10 - 20' + '</div>' +
            '<div style="background-color:#453781">' + '20 - 30' + '</div>' +
            '<div style="background-color:#39569C">' + '30 - 40' + '</div>' +
            '<div style="background-color:#2D708E">' + '40 - 50' + '</div>' +
            '<div style="background-color:#238A8D">' + '50 - 60' + '</div>' +
            '<div style="background-color:#20A387">' + '60 - 70' + '</div>' +
            '<div style="background-color:#3CBB75">' + '70 - 80' + '</div>' +
            '<div style="background-color:#95D840">' + '80 - 90' + '</div>' +
            '<div style="background-color:#FDE725">' + '90 - 100' + '</div>' +
            '<div style="background-color:#FFFF99">' + '> 100' + '</div>';

        legend.appendChild(div);
    } else if (flag == 8) {
        const div = document.createElement("div");
        div.innerHTML =
            '<div style="background-color:#444444">' + '0.0 - 0.3' + '</div>' +
            '<div style="background-color:#481567">' + '0.3 - 0.6' + '</div>' +
            '<div style="background-color:#453781">' + '0.6 - 0.9' + '</div>' +
            '<div style="background-color:#39569C">' + '0.9 - 1.2' + '</div>' +
            '<div style="background-color:#2D708E">' + '1.2 - 1.5' + '</div>' +
            '<div style="background-color:#238A8D">' + '1.5 - 1.8' + '</div>' +
            '<div style="background-color:#20A387">' + '1.8 - 2.1' + '</div>' +
            '<div style="background-color:#3CBB75">' + '2.1 - 2.4' + '</div>' +
            '<div style="background-color:#95D840">' + '2.4 - 2.7' + '</div>' +
            '<div style="background-color:#FDE725">' + '2.7 - 3.0' + '</div>' +
            '<div style="background-color:#FFFF99">' + '> 3.0' + '</div>';

        legend.appendChild(div);
    } else {
        const div = document.createElement("div");
        div.innerHTML = '';
        legend.appendChild(div);
    }

    console.log("hello3");
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
}

function divid(legend, map) {
    const div = document.createElement("div");
    div.setAttribute("class", "legend");
    div.setAttribute("id", legend);
    document.getElementById(map).appendChild(div);
}