const { MongoClient } = require('mongodb')

async function main(){

    const uri = 'mongodb://127.0.0.1:27017'
    const client = new MongoClient(uri)
    
    try {
        await client.connect() 
        
        // await createOrders(client,[
        //     {order_status:"placed",transaction_status:"pending",payment_mode:"cod",user_id:"sam@gmail.com",payment_status:"pending",billing_address:"23/xyz,fg street,mumbai",shipping_address:"23/xyz,fg street,mumbai",total_items:3,products:["Fleece Sweatshirt","Warrior-DK shoes","Lorem watch"]},    
        //     {order_status:"placed",transaction_status:"pending",payment_mode:"cod",user_id:"amy@gmail.com",payment_status:"pending",billing_address:"23/xyz,fg street,mumbai",shipping_address:"23/xyz,fg street,mumbai",total_items:1,products:["Lorem watch"]},    
        //     {order_status:"placed",transaction_status:"pending",payment_mode:"cod",user_id:"reeni@gmail.com",payment_status:"pending",billing_address:"23/xyz,fg street,mumbai",shipping_address:"23/xyz,fg street,mumbai",total_items:2,products:["Fleece Sweatshirt","Warrior-DK shoes"]},    
        //     {order_status:"placed",transaction_status:"pending",payment_mode:"cod",user_id:"mon@gmail.com",payment_status:"pending",billing_address:"23/xyz,fg street,mumbai",shipping_address:"23/xyz,fg street,mumbai",total_items:2,products:["Fleece Sweatshirt","Warrior-DK shoes"]},    
        //     {order_status:"placed",transaction_status:"pending",payment_mode:"cod",user_id:"rocky@gmail.com",payment_status:"pending",billing_address:"23/xyz,fg street,mumbai",shipping_address:"23/xyz,fg street,mumbai",total_items:2,products:["Fleece Sweatshirt","Warrior-DK shoes"]},            
        // ])

        // await readOrders(client)
        
        // await updateOrders(client)
        
        // await deleteOrders(client)

    } catch (e) {   
        console.error(e)
    } finally{
        client.close()
    }

}

main().catch(console.error)

//create 
async function createOrders(client,obj){
    const result = await client.db('usersDB').collection('Orders').insertMany(obj)
    console.log("document created: " , result.insertedCount) 
}

//read
async function readOrders(client){
    const result = await client.db('usersDB').collection('Orders').find().toArray()
    console.log("result:" + JSON.stringify(result)) 
}

//update
async function updateOrders(client){
    const result = await client.db('usersDB').collection('Orders').updateOne({user_id:"sam@gmail.com"} , {$set:{products:["Warrior-DK shoes","Lorem watch"],total_items:2}})
    console.log("updated: " , JSON.stringify(result)) 
}

//delete
async function deleteOrders(client){
    const result = await client.db('usersDB').collection('Orders').deleteOne({user_id:"dany@gmail.com"})
    console.log("deleted " , JSON.stringify(result)) 
}