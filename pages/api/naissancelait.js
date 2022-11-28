import clientPromise from "../../lib/mongodb.ts";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("laitGIRONDE");
        const collection = db.collection("NB NAISSANCES ANNUEL")

        // const predi = await db.listCollections().toArray();

        const result = await collection.find({}).toArray()
        // console.log(result)
        const annee = []
        const nbnaissances = []
        for (let element of result) {
            // console.log(element['Année'])
            annee.push(element['Année'])
            nbnaissances.push(element['Naissances par an'])
        }
        // console.log(annee)
        // console.log(agemoyen);



        const newdb = client.db('predictionGIRONDE')
        const newcollection = newdb.collection('TX NATALITE ANNUEL G')

        const resallait = await newcollection.find({}).toArray()
        // console.log(resallait)

        const natalite = []
        for (let element of resallait) {
            // console.log(element);
            natalite.push(element['Taux de natalité - Gironde'])
        }




        const json = {
            // 'data' : {
                        'Année' : annee,
                        'Naissances par an' : nbnaissances,
                        'Natalité' : natalite
                    // }
        }
        // console.log(json);
        res.send(json);


    } catch (e) {
        console.error(e);
    }
};