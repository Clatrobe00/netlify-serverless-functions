const { createClient } = require("@astrajs/collections")

exports.handler = async function (event, context, callback) {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD
    });

    const collection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("collection");

    try {
        await collection.create("new post", {
            title: "my new post"
        })
        
        return {
            statusCode: 200
    }
} catch(e) {
    console.error(e)
    return {
        statusCode: 500
    }
}
}