//ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//CAROUSEL
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//MAPS
let map;
let infoWindow;
let dataArr;
var colArr = [];

var map1, map2, map3;

var basemap = {
    lat: 20.59,
    lng: 78.96
}
var mumbai = {
    lat: 19.08,
    lng: 72.88
}

function initMap() {
    var op = {
        zoom: 5,
        center: basemap
    }

    map1 = new google.maps.Map(document.getElementById("map1"), op);
    mum(1, 1, map1); //Mumbai Population

    map2 = new google.maps.Map(document.getElementById("map2"), op);
    mum(1, 2, map2); //Mumbai Population

    map3 = new google.maps.Map(document.getElementById("map3"), op);
    mum(1, 3, map3); //Mumbai Population
}

function mum(indic, flag, mapx) {
    mapx.setCenter(mumbai);
    mapx.setZoom(9);

    if (indic == 1) {
        switch (flag) {
            case 1:
                dataArr = Mumbai_Grid_type;
                break;
            case 2:
                dataArr = Mumbai_Class_label;
                break;
            case 3:
                dataArr = Mumbai_Three_ways;
                break;
            case 4:
                dataArr = Mumbai_Four_ways;
                break;
            case 5:
                dataArr = Mumbai_Urban_percentage;
                break;
            case 6:
                dataArr = Mumbai_Periurban_percentage;
                break;
            case 7:
                dataArr = Mumbai_Rural_percentage;
                break;
            case 8:
                dataArr = Mumbai_Walkability_ratio;
                break;
            default:
                break;
        }
    }
    if (indic == 2) {
        dataArr = Mumbai_Grid_Population
    }
    if (indic == 3) {
        switch (flag) {
            case 1:
                dataArr = Mumbai_n_Connectivity;
                break;
            case 2:
                dataArr = Mumbai_num_Connectivity;
                break;
            case 3:
                dataArr = Mumbai_n_Education;
                break;
            case 4:
                dataArr = Mumbai_num_Education;
                break;
            case 5:
                dataArr = Mumbai_n_Government_Facilities;
                break;
            case 6:
                dataArr = Mumbai_num_Government_Facilities;
                break;
            case 7:
                dataArr = Mumbai_n_Health;
                break;
            case 8:
                dataArr = Mumbai_num_Health;
                break;
            case 9:
                dataArr = Mumbai_n_Utilities;
                break;
            case 10:
                dataArr = Mumbai_num_Utilities;
                break;
            default:
                break;
        }
    }

    getColorArrays(dataArr, colArr);

    let k = 0;
    for (let i = 0; i < 22; i++)
        for (let j = 0; j < 38; j++) {
            setCoords({
                properties: {
                    lat: Mumbai_Grid_Coordinates[0] + 0.01 * j,
                    lng: Mumbai_Grid_Coordinates[1] + 0.01 * i,
                    num: k
                }
            }, flag, mapx);
            k += 1;
        }
}