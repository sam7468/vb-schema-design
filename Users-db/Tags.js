const { MongoClient } = require('mongodb')

async function main(){

    const uri = 'mongodb://127.0.0.1:27017'
    const client = new MongoClient(uri)
    
    try {
        await client.connect() 
        
        // await createTags(client,[
        //     {name:"best seller",slug:"best-seller"},
        //     {name:"trending now",slug:"trending-now"},
        //     {name:"mens wear",slug:"mens-wear"},
        //     {name:"kids wear",slug:"kids-wear"},
        //     {name:"branded clothings",slug:"branded-clothings"}
        //     ])

        // await readTags(client)
        
        // await updateTags(client)
        
        // await deleteTags(client)

    } catch (e) {   
        console.error(e)
    } finally{
        client.close()
    }

}

main().catch(console.error)

//create 
async function createTags(client,obj){
    const result = await client.db('usersDB').collection('Tags').insertMany(obj)
    console.log("document created: " , result.insertedCount) 
}

//read
async function readTags(client){
    const result = await client.db('usersDB').collection('Tags').find().toArray()
    console.log("result:" + JSON.stringify(result)) 
}

//update
async function updateTags(client){
    const result = await client.db('usersDB').collection('Tags').updateOne({name:"womens wear"} , {$set:{name:"womens clothings", slug:"womens-clothings"}})
    console.log("updated: " , JSON.stringify(result)) 
}

//delete

async function deleteTags(client){
    const result = await client.db('usersDB').collection('Tags').deleteOne({name:"womens wear"})
    console.log("deleted " , JSON.stringify(result)) 
}