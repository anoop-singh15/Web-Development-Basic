// show dbs
// use test_1
// show collections

db.items.find()

// Deleting item from Mongo
db.items.deleteOne({price:'200'})
db.items.deleteOne({name:'apple'})
// deleteOne will delete the matching entry and will delete the first entry
// in case of multi document match

// for mutiple deletion of an query like if we have two of same query
db.items.deleteMany({rating:{$gte:'3'}})

