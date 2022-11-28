import clientPromise from "../../lib/mongodb.ts";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("laitGIRONDE");
        const collection = db.collection("CONDITIONNEMENT LAIT")

        // const predi = await db.listCollections().toArray();

        const result = await collection.find({}).toArray()
        // console.log(result)
        const date = []
        const production = []
        
        for (let element of result) {
           
            date.push(element['Mois'] + ' ' + element['Année'])

            if (!production.includes(element['Tonnes de poudre infantiles conditionnées'])){

                production.push(element['Tonnes de poudre infantiles conditionnées'])
            }

            // nbnaissances.push(element['Naissances par an'])
        }

        // console.log(production)
        const json = {
            // 'data' : {
                        'Date' : date,
                        'Tonnes de poudre infantiles conditionnées' : production
                    // }
        }

        res.send(json);


    } catch (e) {
        console.error(e);
    }
};