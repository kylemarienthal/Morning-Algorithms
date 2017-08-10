// getting just the digits from a string
// 'asd5d48b2f555sdfsd' => 5482555


function getDigits(str){
    var myStr = '';
    for (var i = 0; i < str.length; i++) {
        if(parseInt(i) != NaN){
            myStr += i;
        }        
    }
    return parseInt(myStr);
}
