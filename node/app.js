function Ninja() {
  var feints = 0;
  this.getFeints = function() {
    return feints;
  };
  this.feint = function() {
    feints++;
  };
}


var ninja = new Ninja();
console.log(ninja.feints,'ninja.feints');
