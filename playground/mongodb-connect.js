const {MongoClient,ObjectID}=require("mongodb");
var obj=new ObjectID();
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return  console.log("Unable to connect to MongoDb server");
    }
    console.log("Connected to MongoDB server");
    const db=client.db("TodoApp");
    //Insert new doc into Users
    db.collection("Users").insertOne({
        
        name:"Yahya",
        age:25,
        location:"Stars"
    },(err,res)=>{
        if(err){
            return console.log("Unable to insert user",err);
        }
        var time_stamp=res.ops[0]._id.toString().substring(0,6);
        //console.log(new Date(parseInt(time_stamp,16)*1000));
        console.log(obj);
    })

    db.collection("Todos").find({}).count().then((count)=>{
        console.log(`Todos count:${count}`);
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("Unable to fetch todos",err);
    })

   // db.collection("Todos").insertOne({
   //     text:"Something to do",
   //     completed:false
   // },(err,res)=>{
   //     if(err){
   //         return console.log("Unable to insert todo",err);
   //     }
   //     console.log(JSON.stringify(res.ops,undefined,2))
   // })
   // 
   db.collection("Users").find({name:"Len"}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
   });
   
 client.close();
   
});