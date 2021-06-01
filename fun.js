function setCoords(props, flag, mapx) {
    var gridNumber = props.properties.num
    var lat1 = props.properties.lat
    var lng1 = props.properties.lng
    var lat2 = props.properties.lat + 0.01
    var lng2 = props.properties.lng
    var lat3 = props.properties.lat + 0.01
    var lng3 = props.properties.lng + 0.01
    var lat4 = props.properties.lat
    var lng4 = props.properties.lng + 0.01

    const myGrid = new google.maps.Polygon({
        paths: [{
            lat: lat1,
            lng: lng1
        }, {
            lat: lat2,
            lng: lng2
        }, {
            lat: lat3,
            lng: lng3
        }, {
            lat: lat4,
            lng: lng4
        }, ],

        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: getColor(gridNumber, flag),
        fillOpacity: 1,
    });

    myGrid.setMap(mapx);
    myGrid.addListener("click", showArrays(mapx));
    infoWindow = new google.maps.InfoWindow();
}

function getColor(gridNumber, flag) {
    var color = "#";
    var i = gridNumber;

    color += colArr[i];
    return color;
}

function showArrays(event, mapx) {
    const polygon = this;
    const vertices = polygon.getPath();
    let contentString =
        "Location: <br>" + event.latLng.lat() + ", " + event.latLng.lng() + "<br>" +
        "Bottom Left Coordinate: " + vertices.getAt(3).lat().toFixed(2) + ", " + vertices.getAt(0).lng().toFixed(2);

    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(mapx);
}

function getColorArrays(arr, arrc) {
    var x;
    arrc.length = Mumbai_Number;
    for (x = 0; x < Mumbai_Rejected.length; x++)
        arrc[x] = "000000"

    for (x = 0; x < Mumbai_Rural.length; x++)
        arrc[x] = "FFFFFF"

    for (x = 0; x < arr.length; x++)
        arrc[Mumbai_Grid_Number[x]] = _Color[arr[x]]
}

function _Color(type) {
    if (type == "0" || type == "Rejected") return "000000"; //BLACK
    else if (type == "1" || type == "Rural") return "FFFFFF";
    else if (type == "2" || type == "PeriUrban") return "453781";
    else if (type == "3" || type == "Urban") return "39569C";
    else if (type == "4") return "2D708E";
    else if (type == "5") return "238A8D";
    else if (type == "6") return "20A387";
    else if (type == "7") return "3CBB75";
    else if (type == "8") return "95D840";
    else if (type == "9") return "FDE725";
    else if (type == "10") return "FFFF99";
    else return "FFFFFF";
}