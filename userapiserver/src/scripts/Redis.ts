import { createClient } from "redis";




//Redis Connection
const client = createClient({
    socket:{
      host: '127.0.0.1',
      port: 6379
    }

  })
  client.on('error', (err)=> {
    console.log(err);
    client.disconnect()
  })
  client.connect();

  
  export default client