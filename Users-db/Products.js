const { MongoClient } = require('mongodb')

async function main(){

    const uri = 'mongodb://127.0.0.1:27017'
    const client = new MongoClient(uri)
    
    try {
        await client.connect() 
        
        // await createProducts(client,[
        //     {name:"Fleece Sweatshirt",category_name:"sweatshirts",additional_information:"Outdoor Men Black Solid Fleece Sweatshirt",description:" fleece sweatshirt, has a mock collar, long sleeves, zip closure, straight hem",thumbnail:"dummy.url/hdfg/sdjf",base_price:1899,sell_price:900,product_gallery:[{color:"black",image:"dummy/url/dhfb.png"},{color:"red",image:"dummy/url/dhfb.png"}],tag:"menswear"},
        //     {name:"Warrior-DK shoes",category_name:"running shoes",additional_information:"Outdoor Men Black running shoes",description:" Warrior-DK shoes, has a mock material, zip closure, straight hem",thumbnail:"dummy.url/hdfg/sdjf",base_price:4500,sell_price:2500,product_gallery:[{color:"black",image:"dummy/url/dhfb.png"},{color:"white",image:"dummy/url/dhfb.png"}],tag:"menswear"},
        //     {name:"Lorem watch",category_name:"watches",additional_information:"Men Blue Analogue Watch",description:" LR54 watch Comes with Round shape Multi-Colour Dial",thumbnail:"dummy.url/hdfg/sdjf",base_price:1899,sell_price:900,product_gallery:[{color:"black",image:"dummy/url/dhfb.png"},{color:"red",image:"dummy/url/dhfb.png"}],tag:"menswear"}
        // ])

        // await readProducts(client)
        
        // await updateProducts(client)
        
        // await deleteProducts(client)

    } catch (e) {   
        console.error(e)
    } finally{
        client.close()
    }

}

main().catch(console.error)

//create 
async function createProducts(client,obj){
    const result = await client.db('usersDB').collection('Products').insertMany(obj)
    console.log("document created: " , result.insertedCount) 
}

//read
async function readProducts(client){
    const result = await client.db('usersDB').collection('Products').find().toArray()
    console.log("result:" + JSON.stringify(result)) 
}

//update
async function updateProducts(client){
    const result = await client.db('usersDB').collection('Products').updateOne({name:"Warrior-DK shoes"} , {$set:{name:"adidas-yeezy"}})
    console.log("updated: " , JSON.stringify(result)) 
}

//delete

async function deleteProducts(client){
    const result = await client.db('usersDB').collection('Products').deleteOne({name:"gucci gripwatch"})
    console.log("deleted " , JSON.stringify(result)) 
}