import clientPromise from "../../lib/mongodb.ts";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("predictionGIRONDE");
        var collection = db.collection("NB SF ANNUEL G")

        // const predi = await db.listCollections().toArray();

        var result = await collection.find({}).toArray()
        // console.log(result)
        const annee = []
        const total = []
        for (let element of result) {
            // console.log(element['Année'])
            annee.push(element['Année'])
            total.push(element['Total'])
        }
        // console.log(annee)
        // console.log(agemoyen);
        
        collection = db.collection("MATERNITES ANNUELLES")
        const nbmaternite = []

        result = await collection.find({}).toArray()
        for (let element of result) {
            // console.log(element['Année'])
            nbmaternite.push(element['Total'])
        }

        

        const json = {
            // 'data' : {
                        'Année' : annee,
                        'Total' : total,
                        'Nombre de maternités' : nbmaternite
                    // }
        }

        res.send(json);


    } catch (e) {
        console.error(e);
    }
};