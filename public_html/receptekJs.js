$(function () {
    $.ajax({
        url: "receptek.json",
        success: function (result) {
            console.log(result);
            receptekTomb = result;
            kiir();
        }
    });
    $("#bal").click(balraLeptet);
    $("#jobb").click(jobbraLeptet);
    $("article").on("click", "tr", etelKivalaszt);
    $("article").on("click", "tr", receptKivalaszt);
    $("#torles").click(torles);
    $("#modositas").click(modositas);
    
});

var receptekTomb = [];
var leptetoIndex = 0;
var menuFejlec = false;
var menuI = 0;
var osszIdo = 0;
var osszAr = 0;
var osszEdesseg = 0;

function kiir() {
    $("article").append("<table>");
    $("article table").append("<tr>");
    $("article table tr").append("<th>Recept név</th><th>Elkészítési idő</th><th>Leírás</th><th>Kép</th><th>Hozzávalók</th><th>Ár</th><th>Rendelési mennyiség</th>");

    for (var i = 0; i < receptekTomb.length; i++) {
        $("article table").append("<tr id='" + i + "'>");
        for (var item in receptekTomb[i]) {
            $("article table tr").eq(i + 1).append("<td>" + receptekTomb[i][item] + "</td>");
        }
             $("article table tr").eq(i+1).append("<td> <input type=\"text\" id=\"fname\" name=\"fname\"></td>");

    }
}

function receptKivalaszt() {
//    console.log("itt vagyok");

    var id = $(this).attr("id");
    console.log(id);
    console.log(receptekTomb[id]);
    leptetoIndex = id;
    megjelenit(id);
}

function torol() {
    $
}
function modosit() {
    $
}

function megjelenit(id) {
    $("#recept").empty();
    $("#recept").append("<img src='" + receptekTomb[id].kep + "' alt='" + receptekTomb[id].nev + "'>" + +"</td>" + "<td>" + "<input type='button' id='TOROL' name='TOROL' value='TÖRÖL'>" + "</td>" + "</td>" + "<td>" + "<input type='button' id='Modosit' name='Modosit' value='Modosit'>" + "</td>");
    $("#recept").append("<h2>");
    $("#recept h2").append(receptekTomb[id].nev);
    $("#recept").append("<p>");
    $("#recept p").append(receptekTomb[id].leiras);
    $("#recept").append("<p>");
    $("#recept p").eq(1).append("Elkészítési idő: " + receptekTomb[id].ido);
    $("#recept").append("<h3>");
    $("#recept h3").append("Kategória " + receptekTomb[id].kategoria);
    $("#recept").append("<ul>");
    var hozzavalok = receptekTomb[id].hozzavalok;
    console.log(hozzavalok);
    for (var i = 0; i < hozzavalok.length; i++) {
        for (var item in hozzavalok[i]) {
            $("#recept ul").append("<li>" + item + " " + hozzavalok[i][item] + "</li>");
        }
    }
}

function balraLeptet() {
    leptetoIndex--;
    if (leptetoIndex < 0) {
        leptetoIndex = receptekTomb.length - 1;
    }
    megjelenit(leptetoIndex);
}
function jobbraLeptet() {
    leptetoIndex++;
    if (leptetoIndex > receptekTomb.length - 1) {
        leptetoIndex = 0;
    }
    megjelenit(leptetoIndex);
}


function torles() {
    $("#torles").remove();
}

function modositas() {

}

function csuszka() {
    var arTomb = [1550, 3000, 2000];
    
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    };

    $("article").empty();

    $("article").append("<table>");
    $("article table").append("<tr>");
    $("article table tr").append("<th>Recept név</th><th>Elkészítési idő</th><th>Leírás</th><th>Kép</th><th>Hozzávalók</th>");

    for (var i = 0; i < receptekTomb.length; i++) {
        $("article table").append("<tr id='" + i + "'>");
            if (arTomb[i] <= slider.value) {
                for (var item in receptekTomb[i]) {
                    $("article table tr").eq(i + 1).append("<td>" + receptekTomb[i][item] + "</td>");
                }
            }
            
        
    }
}

function etelKivalaszt(){
    var adottTdId = parseInt($(this).attr("id"));
    menuOsszeallit(adottTdId);
    console.log(adottTdId);
    console.log("LEFUT");
}


function menuOsszeallit(index){
//    $("section").append("<p id='menuKerdes'>")
    
    if (!menuFejlec) {
        $("#menu").append("<table>");
        $("#menu table").append("<tr>");
        $("#menu table tr").append("<th>Recept név</th><th>Elkészítési idő</th><th>Elkészítési idő összesen</th><th>Desszertek száma</th><th>Az Árak Összege</th>");
        menuFejlec = true;
    }
    $("#menu table").append("<tr>");
    $("#menu table tr").eq(menuI + 1).append("<td>" + receptekTomb[index].nev + "</td>").append("<td>" + receptekTomb[index].ido + "</td>");
    osszIdo += parseInt(receptekTomb[index].ido);
    $("#menu table tr").eq(menuI + 1).append("<td>" + osszIdo + " perc" + "</td>");
    if(receptekTomb[index].kategoria === "édesség"){
        osszEdesseg ++;
    }
    $("#menu table tr").eq(menuI + 1).append("<td>"+ osszEdesseg +" db </td>");
    osszAr += parseInt(receptekTomb[index].ar);
    $("#menu table tr").eq(menuI + 1).append("<td>"+ osszAr +" Ft </td>");
    menuI ++;
}