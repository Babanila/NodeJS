exports.myDateTime = function(){
    return Date();
}

exports.myCalculator = function(){
    var i=3, j, a, result='';
    for(i=1; i <= 3; i++){
        for(j=1; j <= 12; j++){
            result += i + '*' + j + ' = ' + i*j + '<br>';
        }
        if(j=12){result += '<br> <br>';}
    }
    return result;
}