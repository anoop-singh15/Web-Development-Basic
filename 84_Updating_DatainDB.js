// show collections
// we can insert in any collections
// text and items



db.items.insertMany([{name:"Nokia",price:"1000",rating:"4",qty:"10",sold:"111"},{name:"apple",price:"200",rating:"2",qty:"10",sold:"111"},{name:"google pixel",price:"300",rating:"3",qty:"10",sold:"112"},{name:"Samsung",price:"400",rating:"3.5",qty:"110",sold:"711",isBig:true}])
db.items.deleteOne({name:'apple'})


// For updations update one or many two arguments
db.items.updateOne({name:"apple"},{$set:{price:"1"}})


// Updating Many fields
db.items.updateMany({name:"Nokia"},{$set:{price:"2000"}})


db.items.updateMany({name:"Nokia"},{$set:{price:"2000",rating:"5"}})

