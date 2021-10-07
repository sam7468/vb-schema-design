const { MongoClient } = require('mongodb')

async function main(){

    const uri = 'mongodb://127.0.0.1:27017'
    const client = new MongoClient(uri)
    
    try {
        await client.connect() 
        
        // await createRoles(client,[
        //     {name:"technical support",slug:"technical-support"},
        //     {name:"sales engineer",slug:"sales-engineer"},
        //     {name:"computer research scientist",slug:"computer-research-scientist"},
        //     {name:"web designer",slug:"web-designer"},
        // ])

        // await readRoles(client)
        
        // await updateRoles(client)
        
        // await deleteRoles(client)

    } catch (e) {   
        console.error(e)
    } finally{
        client.close()
    }

}

main().catch(console.error)

//create 
async function createRoles(client,obj){
    const result = await client.db('usersDB').collection('Roles').insertMany(obj)
    console.log("document created at: " , result.insertedCount) 
}

//read
async function readRoles(client){
    const result = await client.db('usersDB').collection('Roles').find().toArray()
    console.log("result:" + JSON.stringify(result)) 
}

//update
async function updateRoles(client){
    const result = await client.db('usersDB').collection('Roles').updateOne({name:"web designer"} , {$set:{name:"web developer",slug:"web-developer"}})
    console.log("updated: " , JSON.stringify(result)) 
}

//delete

async function deleteRoles(client){
    const result = await client.db('usersDB').collection('Roles').deleteOne({slug:"web-developer"})
    console.log("deleted " , JSON.stringify(result)) 
}