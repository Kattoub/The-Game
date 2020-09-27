var kleurkaas = prompt("Is de kaas geel?")
    if (kleurkaas == "ja")

var gaten = prompt("Zitten er gaten in?")
    if (gaten == "ja")

var Belachelijkduur = prompt("Is de kaas Belachelijk duur?")
    if (Belachelijkduur == "ja") {
    	alert("de kaas is Emmenhaler")
    }
    else if (gaten == "nee"){
    	var hardsteen = prompt("is de kaas hard als steen?")
    	if (hardsteen == "ja") {
    		alert("de kaas is Pamigiano Reggiano")
    	}
    	else if (hardsteen == "nee") {
    		alert("de kaas is Goudse kaas")
    	}
    }
    else if (Belachelijkduur == "nee") {
    	alert("de kaas is Leerdammer")
    }
    else if (kleurkaas == "nee") {
    	var blauweschimmels = prompt("heeft de kaas blauwe schimmels?")
    	if (blauweschimmels == "ja")

    	var korst = prompt("heeft de kaas een korst?")
    	if (korst == "ja") {
    		alert("de kaas is Bleu de Rochbaron")
    	}
    	else if (korst == "nee") {
    		alert("de kaas is Foume d'Ambert")
    	}
    	var korsthebben = prompt("heeft de kaas een korst?")
        if (korsthebben == "ja") {
        	alert("de kaas is cammembert")
        }
        else if (korsthebben == "nee") {
        	alert("de kaas is Mozzarella")
        }
}
