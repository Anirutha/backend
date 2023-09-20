import {MongoClient} from "mongodb"
import Obj from "mongodb"

const MongoURL ="mongodb+srv://aniruthasivakumar03:Mahathi03@cluster0.lkcuotq.mongodb.net/?retryWrites=true&w=majority"
async function createConnection(){
   const client = new MongoClient(MongoURL);
    await client.connect()
    console.log("MongoDB is connected Sucessfully")
    return client
}

export var ObjectId = Obj.ObjectId;
export const client = await createConnection();