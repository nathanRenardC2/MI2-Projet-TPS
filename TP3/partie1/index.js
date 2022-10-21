function randomNumberGame() {
    var nbEssaies = 3;
    var nbEssaiesEffectues = 0;
    var random = Math.floor(Math.random() * 10);
    do{
        do{
            var userNumber = prompt("Choisissez un nombre entre 0 et 10");
            var userNumberInt = parseInt(userNumber);
        } while(isNaN(userNumberInt));

        if (userNumberInt > random) {
            alert("C'est moins");
        } else if (userNumberInt < random) {
            alert("C'est plus");
        } else {
            alert("Bravo, vous avez trouvé le nombre mystère qui était " + random.toString());
        }
        nbEssaiesEffectues++;
    } while (userNumberInt != random && nbEssaiesEffectues != nbEssaies);
}