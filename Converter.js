function convertToRoman(num) {
 var romanString = "";
 var arr = [];
 arr[0]=testNumberOf(num, 1000);
 num-=arr[0] * 1000;
 arr[1]=testNumberOf(num,100);
 num-= arr[1] * 100;
 arr[2] = testNumberOf(num,10);
 num-=arr[2] * 10;
 arr[3] = testNumberOf(num,1);
 num-=arr[3];
 romanString += romanFrom(arr[0],"M",null);
 romanString += romanFrom(arr[1],"C","D","M");
 romanString += romanFrom(arr[2],"X","L","C");
 romanString += romanFrom(arr[3],"I","V","X");
 return romanString;
}

function testNumberOf(num,place){
  if(num >= place){
    return Math.floor(num/place);
  }
  else{return null;}
}
function romanFrom(index,char,char2,char3){
  var str = "";
  if(index<=3){
    str += char.repeat(index);
  }
  else if(index == 4){
    str += char + char2;
  }
  else if(index >= 5 && index <= 8){
    str += char2 + char.repeat(index-5);
  }
  else if(index == 9){
    str += char + char3;
  }
  return str;
}
