(function massunfollow() {
    if(document.getElementsByClassName('aOOlW -Cab_')[0]){

    document.getElementsByClassName('_8A5w5')[3].click();
    document.getElementsByClassName('aOOlW -Cab_')[0].click();

    } else {

        document.getElementsByClassName('_8A5w5')[3].click();
    }
    var randomTimeoutForUnfollow = Math.floor((Math.random() * 10) + 10) * 1000;
    console.log(randomTimeoutForUnfollow);
        setTimeout(massunfollow, randomTimeoutForUnfollow);
})();
