oneHome = document.getElementById("plus-one-home");;
twoHome = document.getElementById("plus-two-home");
threeHome = document.getElementById("plus-three-home"); 
oneGuest = document.getElementById("plus-one-guest");
twoGuest = document.getElementById("plus-two-guest");
threeGuest = document.getElementById("plus-three-guest"); 

scoreHome = document.getElementById("home-score");
scoreGuest = document.getElementById("guest-score");


oneHome.addEventListener("click", function(){
    scoreHome.innerHTML = parseInt(scoreHome.innerHTML) + 1;
});

twoHome.addEventListener("click", function(){
    scoreHome.innerHTML = parseInt(scoreHome.innerHTML) + 2;
});

threeHome.addEventListener("click", function(){
    scoreHome.innerHTML = parseInt(scoreHome.innerHTML) + 3;
});

oneGuest.addEventListener("click", function(){
    scoreGuest.innerHTML = parseInt(scoreGuest.innerHTML) + 1;
});

twoGuest.addEventListener("click", function(){
    scoreGuest.innerHTML = parseInt(scoreGuest.innerHTML) + 2;
});

threeGuest.addEventListener("click", function(){
    scoreGuest.innerHTML = parseInt(scoreGuest.innerHTML) + 3;
});
