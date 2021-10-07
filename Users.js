const { MongoClient } = require('mongodb')

async function main(){

    const uri = 'mongodb://127.0.0.1:27017'
    const client = new MongoClient(uri)
    
    try {
        await client.connect() 
        
        // await createUser(client,[
        //     {first_name:"harry",last_name:"styles",profile_image:"https://www.robertwalters.co.uk/content/dam/r/robert-walters-logo.png",role:"swe",email:"hrry@gmail.com"},
        //     {first_name:"dany",last_name:"roldan",profile_image:"https://www.robertwalters.co.uk/content/dam/r/robert-walters-logo.png",role:"doctor",email:"dany@gmail.com"},
        //     {first_name:"reny",last_name:"gaud",profile_image:"https://www.robertwalters.co.uk/content/dam/r/robert-walters-logo.png",role:"hr",email:"renyy@gmail.com"},
        //     {first_name:"sweton",last_name:"daniel",profile_image:"https://www.robertwalters.co.uk/content/dam/r/robert-walters-logo.png",role:"manager",email:"sweton@gmail.com"}
        // ])

        // await readUsers(client)
        
        // await updateUser(client)
        
        // await deleteUser(client)

    } catch (e) {   
        console.error(e)
    } finally{
        client.close()
    }

}

main().catch(console.error)

//create 
async function createUser(client,obj){
    const result = await client.db('usersDB').collection('Users').insertMany(obj)
    console.log("document created at: " , result.insertedCount) 
}

//read
async function readUsers(client){
    const result = await client.db('usersDB').collection('Users').find().toArray()
    console.log("result:" + JSON.stringify(result)) 
}

//update
async function updateUser(client){
    const result = await client.db('usersDB').collection('Users').updateOne({first_name:"amy"} , {$set:{last_name:"amanda"}})
    console.log("updated: " , JSON.stringify(result)) 
}

//delete

async function deleteUser(client){
    const result = await client.db('usersDB').collection('Users').deleteMany({name:"sam"})
    console.log("deleted " , JSON.stringify(result)) 
}