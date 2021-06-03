const { createClient } = require("@astrajs/collections")

const collection = 'post'

exports.handler = async function (event, context, callback) {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });



    // const basePath = `/api/rest/v2/KEYSPACES/${process.env.ASTRA_DBKEPSPACE}/collections/collection`;

    const data = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(collection);

    try {

        // const { data, status } = await astraClient.post(basePath, {
        //     name: "test post",
        //   });
        await data.create("newPost", {
            title: "fuck"
        }) 
        
        return {
            statusCode: 200
    }
} catch(e) {
    console.error(e)
    return {
        statusCode: 500,
        body: JSON.stringify(e)
    }
}
}