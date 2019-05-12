toppos = 0;
(function massunfollow() {
    if(document.getElementsByClassName('aOOlW -Cab_')[0]){

    document.getElementsByClassName('aOOlW -Cab_')[0].click();

    } else {
        toppos = toppos+30;
        document.getElementsByClassName('_8A5w5')[3].click();
        document.getElementsByClassName('isgrP')[0].scrollTop = toppos;
        
    }
    var randomTimeoutForUnfollow = Math.floor((Math.random() * 10) + 9) * 1000;
    console.log(randomTimeoutForUnfollow);
        setTimeout(massunfollow, randomTimeoutForUnfollow);
})();
