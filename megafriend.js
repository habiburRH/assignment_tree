var friends=['habibur','rifat','shifat','arafat'];
function megaFriend(array){
    
    var length=0;
    var longestArray;

    for(var i =0; i<array.length; i++){
        if(array[i].length> length){
            length=array[i].length;
            longestArray=array[i];
        }
    }

    return longestArray;
}

