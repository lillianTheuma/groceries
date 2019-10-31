$(document).ready(function() {
  $("form#num").submit(function(event) {
    var num = $("#input").val();

    var output = (toRoman(num).join(''));

    if(!output){
      output="Stultus es valde.";
    }
    $(".result").text(output);
    event.preventDefault();
  });
});



function toRoman(num) {
  num = num.replace ( /[^0-9]/g, '' );
  if (!(parseInt(num)/parseInt(num)===1)) {
    return [''];
  }
  var chars = [['','I','II','III','IV','V','VI','VII','VIII','IX'],['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],['','M','MM','MMM','MMMM','MMMMM','MMMMMM','MMMMMM','MMMMMMM','MMMMMMMM','MMMMMMMMM']]
  var output=[];
  var j = 0;
  for (var i=((num.length)-1); i>-1;i--){
    output.push(chars[i][num[j]]);
    j+=1;
  }
  return output;
}
