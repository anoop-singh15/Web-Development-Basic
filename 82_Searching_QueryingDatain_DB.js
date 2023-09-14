// Searching for data in mongo

// query --give all objects price 200
db.items.find({price:'200'})

// for querying all values greater than certain values  $gte==greater than
db.items.find({price:{$gte:'300'}})

// And operator
db.items.find({price:{$gte:'300'},rating:{$gte:'3.5'}})

// $lt==less than
db.items.find({price:{$gte:'300'},rating:{$lt:'3.5'}})

// Or operator
    db.items.find({$or:[{price:{$gte:'300'}},{rating:{$lt:'3.5'}}]})

// To find only one field
db.items.find({rating:{$gt:'2'}},{rating:'1',qty:'10'})


