// 1. Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne. 

var legalAge = prompt("įveskite savo amžių")
var clientAge = 0
if(legalAge >= 20){
    alert("Klientas legalaus amžiaus.");
    console.log("Klientas legalaus amžiaus.")
} else{
    alert("Klientas nelegalaus amžiaus");
    console.log("Klientas nelegalaus amžiaus")
}



// 2. Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length). 


// var x = ("Gytis")
//     if(x.length > 6){
//     console.log("Ilgas vardas")
// }
// else{
//     console.log("")
// }

// ARBA

var x = prompt("Įveskite prisijungimo vardą.")
    if(x.length > 6){
    console.log("Ilgas vardas");
    alert("Ilgas vardas")
}
else{
    console.log("")
}


// 3. Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult". 

// var age = 31
//     if(age <= 0){
//         console.log("Invalid age")
//     }
//     if(age >= 100){
//         console.log("Invalid age")
//     }
//     if(age > 1 && age < 18){
//         console.log("Child")
//     }
//     if(age > 19 && age < 100){
//         console.log("Adult")
//     }


// ARBA

var age = prompt("Jūsų amžius")
    if(age <= 0){
        alert("Invalid age");
        console.log("Invalid Age")
    }
    if(age >= 100){
        alert("Invalid age");
        console.log("Invalid Age")
    }
    if(age > 1 && age < 18){
        alert("Child");
        console.log("Nepilnametis Vartotojas")
    }
    if(age > 19 && age < 100){
        alert("Adult");
        console.log("Suaugęs Vartotojas")
    }

// 4. Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam. VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche. BMW group priklauso: BMW, Mini, Rolls-Royce. 

var car = prompt("Automobilis (rašyti mažosiomis raidėmis)")

if (car == "bmw" || car == "mini" || car == "rolls-royce") {
    alert("BMW");
    console.log("BMW");
    } 

 else if (car == "vw" || car == "audi" || car == "bugatti" || car == "lamborghini" || car == "porsche") {
    alert("VW");
    console.log("VW");
 }
    else{
        alert("Nerastas modelis.");
        console.log("UNIDENTIFIED");
    }
