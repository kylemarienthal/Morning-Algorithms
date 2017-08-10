//getting the first letter of every word in a sentence and capitalizing
//'my dog is - super fast' ==> 'MDI-SF'

function acro(str){
    var newStr = str[0];
    for (var i = 0; i < str.length; i++) {
        if(str(i-1) == ' '){
            newStr += str[i];
        }
    }
    return newStr.toupperCase();
}