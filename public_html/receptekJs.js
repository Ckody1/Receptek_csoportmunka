$(function(){ 
    $.ajax({
        url: "receptek.json",
        success: function(result){
            console.log(result);
            receptekTomb = result;
            kiir();
        }
    }); 
    $("#bal").click(balraLeptet);
    $("#jobb").click(jobbraLeptet);
    $("article").on("click", "tr", receptKivalaszt);
    $("#torles").click(torles);
    $("#modositas").click(modositas);
    
});

var receptekTomb = [];
var leptetoIndex = 0;

function kiir(){
//    $("article div").append("");

    $("article").append("<div>");
    $("article div").append("<p>");
   // $("article div").append("<p>");
    
    //$("article div p").append("<th>Recept név</th><th>Elkészítési idő</th><th>Leírás</th><th>Kép</th><th>Kategória</th><th>Ár</th>");
    $("article div p").append("<th>Recept név</th>");
    
    
    
    
    
    
//    for (var i = 0; i < receptekTomb.length; i++) {
//        $("article div").append("<p id='"+ i +"'>");
//        for (var item in receptekTomb[i]) {
//            $("article div p").eq(i + 1).append("<p>" + receptekTomb[i][item] + "</p");
//        }
//    }
    //$("article table tr").click(receptKivalaszt());
}
function kiir(){
    
    
    
}
function receptKivalaszt(){
//    console.log("itt vagyok");
    
    var id = $(this).attr("id");
    console.log(id);
    console.log(receptekTomb[id]);
    leptetoIndex = id;
    megjelenit(id);
}

function torol(){
    $
}
function modosit(){
    $
}

function megjelenit(id){
    $("#recept").empty();
    $("#recept").append("<img src='" +receptekTomb[id].kep+"' alt='"+receptekTomb[id].nev+"'>"+ + "</td>"+ "<td>"+"<input type='button' id='TOROL' name='TOROL' value='TÖRÖL'>"+"</td>" + "</td>"+ "<td>"+"<input type='button' id='Modosit' name='Modosit' value='Modosit'>"+"</td>");
    $("#recept").append("<h2>");
    $("#recept h2").append(receptekTomb[id].nev);
    $("#recept").append("<p>");
    $("#recept p").append(receptekTomb[id].leiras);
    $("#recept").append("<p>");
    $("#recept p").eq(1).append("Elkészítési idő: " + receptekTomb[id].ido);
    $("#recept").append("<h3>");
    $("#recept h3").append("Kategória "+receptekTomb[id].kategoria);
    $("#recept").append("<ul>");
    var hozzavalok = receptekTomb[id].hozzavalok;
    console.log(hozzavalok);
    for (var i = 0; i < hozzavalok.length; i++) {
        for (var item in hozzavalok[i]) {
            $("#recept ul").append("<li>"+ item + " " + hozzavalok[i][item] + "</li>");
        }
    }
}

function balraLeptet(){
    leptetoIndex --;
    if(leptetoIndex < 0){
        leptetoIndex = receptekTomb.length-1;
    }
    megjelenit(leptetoIndex);
}
function jobbraLeptet(){
    leptetoIndex ++;
    if(leptetoIndex > receptekTomb.length - 1){
        leptetoIndex = 0;
    }
    megjelenit(leptetoIndex);
}


function torles(){
 $("#torles").remove();
}

function modositas(){
 
}