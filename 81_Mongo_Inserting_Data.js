// Inserting Data in mongodb

// default is test 
// show dbs
// use test_1
// db.items.find()

// inserting only  one object does  not need an array
// db.items.insertOne({name:"apple",price:"200",rating:"2",qty:"10",sold:"111"})

// insertng many object in db requires an array
// db.items.insertMany([{name:"apple",price:"200",rating:"2",qty:"10",sold:"111"},{name:"apple",price:"200",rating:"2",qty:"10",sold:"111"},{name:"google pixel",price:"300",rating:"3",qty:"10",sold:"112"},{name:"Samsung",price:"400",rating:"3.5",qty:"110",sold:"711",isBig:true}])