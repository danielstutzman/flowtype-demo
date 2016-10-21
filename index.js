// @flow

var str = 'hello world!';


type StrToNum = {[key:string]:(number|void)};
var map:StrToNum = {};
/*var map:{[key:string]:(number|void)} = {}; *//*, safeGet:(key:string)=>number} = {
  safeGet: function(key:string): number {
    var value: number = this[key];
    if (value === undefined) {
      throw new Error("Undefined value for key '" + key + "'");
    }
    return value;
  }
};*/
var safeGet = function(map:StrToNum, key:string) {
  var value: number | void = map[key];
  if (value === undefined) {
    throw new Error("Undefined value for key '" + key + "'");
  }
  return value;
}
map.a = 3;
//var x:number = map['c'];
var x:number = safeGet(map, 'a');
console.log(x);
//var y:number = map.safeGet('b');
//console.log(y);
