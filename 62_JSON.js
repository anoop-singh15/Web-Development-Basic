let JsonObj={
    name:"AbcXyz",
    channel:"xyz",
    food:"pizza",
    language:"c"
};
console.log(JsonObj);

let jsonstr=JSON.stringify(JsonObj);
console.log(jsonstr);

jsonstr=jsonstr.replace("pizza",'burger');
console.log(jsonstr);

// JSON.parse cannot take anything except valid json string
// string to object
// stringify object==object to string
let newJsonObj=JSON.parse(jsonstr);
console.log(newJsonObj);

