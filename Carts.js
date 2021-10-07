const { MongoClient } = require('mongodb')

async function main(){

    const uri = 'mongodb://127.0.0.1:27017'
    const client = new MongoClient(uri)
    
    try {
        await client.connect() 
        
        // await createCarts(client,[
        //     {product:"Fleece Sweatshirt",base_price:1899,sell_price:900,total_price:900,product_qty:1,user:"amy@gmail.com"},
        //     {product:"Warrior-DK shoes",base_price:4500,sell_price:3700,total_price:7400,product_qty:2,user:"sam@gmail.com"},
        //     {product:"Lorem watch",base_price:5600,sell_price:3200,total_price:3200,product_qty:1,user:"joey@gmail.com"},
        //     {product:"gucci gripwatch",base_price:230000,sell_price:180000,total_price:180000,product_qty:1,user:"amy@gmail.com"},
        // ])

        // await readCarts(client)
        
        // await updateCarts(client)
        
        // await deleteCarts(client)

    } catch (e) {   
        console.error(e)
    } finally{
        client.close()
    }

}

main().catch(console.error)

//create 
async function createCarts(client,obj){
    const result = await client.db('usersDB').collection('Carts').insertMany(obj)
    console.log("document created: " , result.insertedCount) 
}

//read
async function readCarts(client){
    const result = await client.db('usersDB').collection('Carts').find().toArray()
    console.log("result:" + JSON.stringify(result)) 
}

//update
async function updateCarts(client){
    const result = await client.db('usersDB').collection('Carts').updateOne({product:"gucci gripwatch"} , {$set:{sell_price:140000,total_price:140000}})
    console.log("updated: " , JSON.stringify(result)) 
}

//delete

async function deleteCarts(client){
    const result = await client.db('usersDB').collection('Carts').deleteOne({product:"Lorem watch 2"})
    console.log("deleted " , JSON.stringify(result)) 
}