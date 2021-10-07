const { MongoClient } = require('mongodb')

async function main(){

    const uri = 'mongodb://127.0.0.1:27017'
    const client = new MongoClient(uri)
    
    try {
        await client.connect() 
        
        // await createCategories(client,[
        //     {image:"https://www.robertwalters.co.uk/content/dam/r/robert-walters-logo.png",name:"furnitures",description:"Up to 40% off| Top deals on furnitures",slug:""},
        //     {image:"https://www.robertwalters.co.uk/content/dam/r/rdjn-walters-logo.png",name:"toys",description:"Up to 40% off| Top deals on toys",slug:""},
        //     ])

        // await readCategories(client)
        
        // await updateCategories(client)
        
        // await deleteCategories(client)

    } catch (e) {   
        console.error(e)
    } finally{
        client.close()
    }

}

main().catch(console.error)

//create 
async function createCategories(client,obj){
    const result = await client.db('usersDB').collection('Categories').insertMany(obj)
    console.log("document created: " , result.insertedCount) 
}

//read
async function readCategories(client){
    const result = await client.db('usersDB').collection('Categories').find().toArray()
    console.log("result:" + JSON.stringify(result)) 
}

//update
async function updateCategories(client){
    const result = await client.db('usersDB').collection('Categories').updateMany({name:"furnitures"} , {$set:{slug:"up-to-40-off-top-deals-on-furnitures"}})
    console.log("updated: " , JSON.stringify(result)) 
}

//delete

async function deleteCategories(client){
    const result = await client.db('usersDB').collection('Categories').deleteOne({name:"furnitures"})
    console.log("deleted " , JSON.stringify(result)) 
}