let accom = [
    "/sound/ACCOMMODATION/Do you have a garden_.mp3",
    "/sound/ACCOMMODATION/Do you live in a house or an apartment_.mp3",
    "/sound/ACCOMMODATION/Do you live on your own_.mp3",
    "/sound/ACCOMMODATION/Have you ever moved house_.mp3",
    "/sound/ACCOMMODATION/How long have you lived in your house or apartment_.mp3",
    "/sound/ACCOMMODATION/Is it better to live on your own or with other people_.mp3",
    "/sound/ACCOMMODATION/Is there anything you don’t like about where you live_.mp3",
    "/sound/ACCOMMODATION/What kind of place do you think you will live in in the future_.mp3",
    "/sound/ACCOMMODATION/What’s your favorite room where you live_.mp3",
    "/sound/ACCOMMODATION/Which room do you spend most time in when you’re at home_.mp3",
    "/sound/ACCOMMODATION/Who do you live with_.mp3",
    "/sound/ACCOMMODATION/Would you prefer to live in the city or the countryside_.mp3"
];

function getRandomAccom() {
    if (accom.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * accom.length);
    var selectedSound = accom[randomIndex];
    accom.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomAccom() {
    var accom = getRandomAccom();
    if (accom !== null) {
        var audioPlayer = document.getElementById("accomPlayer");
        audioPlayer.src = accom;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

let cele = [
    "/sound/Celebrations/_Do you like to dance when you’re at a party_.mp3",
    "/sound/Celebrations/Do you like going to parties_.mp3",
    "/sound/Celebrations/Have you been to a wedding_.mp3",
    "/sound/Celebrations/Have you had a party in your house_.mp3",
    "/sound/Celebrations/How often do you go to a party_.mp3",
    "/sound/Celebrations/Now let’s talk about celebrations.mp3",
    "/sound/Celebrations/Tell us about celebrations in your life.mp3",
    "/sound/Celebrations/What do you like to do at parties_.mp3",
    "/sound/Celebrations/What kind of things do people celebrate in your country_.mp3",
    "/sound/Celebrations/What was your favorite party game as a child_.mp3",
    "/sound/Celebrations/What’s the best food to serve at a celebration_.mp3",
    "/sound/Celebrations/When was the last party you went to_.mp3",
    "/sound/Celebrations/Which famous person would you most like to invite to a party_.mp3"
];

function getRandomCele() {
    if (cele.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * cele.length);
    var selectedSound = cele[randomIndex];
    cele.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomcele() {
    var cele = getRandomCele();
    if (cele !== null) {
        var audioPlayer = document.getElementById("celePlayer");
        audioPlayer.src = cele;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

let hat = [
    "/sound/HOBBIES AND INTERESTS/s1.mp3",
    "/sound/HOBBIES AND INTERESTS/s2.mp3",
    "/sound/HOBBIES AND INTERESTS/s3.mp3",
    "/sound/HOBBIES AND INTERESTS/s4.mp3",
    "/sound/HOBBIES AND INTERESTS/s5.mp3",
    "/sound/HOBBIES AND INTERESTS/s6.mp3",
    "/sound/HOBBIES AND INTERESTS/s7.mp3",
    "/sound/HOBBIES AND INTERESTS/s8.mp3",
    "/sound/HOBBIES AND INTERESTS/s9.mp3",
    "/sound/HOBBIES AND INTERESTS/s10.mp3",
    "/sound/HOBBIES AND INTERESTS/s11.mp3"
];

function getRandomHat() {
    if (hat.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * hat.length);
    var selectedSound = hat[randomIndex];
    hat.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomhat() {
    var hat = getRandomHat();
    if (hat !== null) {
        var audioPlayer = document.getElementById("hatPlayer");
        audioPlayer.src = hat;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

let travel = [
    "/sound/Travels/s1.mp3",
    "/sound/Travels/s2.mp3",
    "/sound/Travels/s3.mp3",
    "/sound/Travels/s4.mp3",
    "/sound/Travels/s5.mp3",
    "/sound/Travels/s6.mp3",
    "/sound/Travels/s7.mp3",
    "/sound/Travels/s8.mp3",
    "/sound/Travels/s9.mp3",
    "/sound/Travels/s10.mp3",
    "/sound/Travels/s11.mp3"
];

function getRandomTravel() {
    if (travel.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * travel.length);
    var selectedSound = travel[randomIndex];
    travel.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomTravel() {
    var travel = getRandomTravel();
    if (travel !== null) {
        var audioPlayer = document.getElementById("travelPlayer");
        audioPlayer.src = travel;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

let study = [
    "/sound/study/s1.mp3",
    "/sound/study/s2.mp3",
    "/sound/study/s3.mp3",
    "/sound/study/s4.mp3",
    "/sound/study/s5.mp3",
    "/sound/study/s6.mp3",
    "/sound/study/s7.mp3",
    "/sound/study/s8.mp3",
    "/sound/study/s9.mp3",
    "/sound/study/s10.mp3",
    "/sound/study/s11.mp3",
    "/sound/study/s12.mp3",
    "/sound/study/s13.mp3",
];

function getRandomStudy() {
    if (study.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * study.length);
    var selectedSound = study[randomIndex];
    study.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomStudy() {
    var study = getRandomStudy();
    if (study !== null) {
        var audioPlayer = document.getElementById("studyPlayer");
        audioPlayer.src = study;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

