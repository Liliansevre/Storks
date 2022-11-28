import clientPromise from "../../lib/mongodb.ts";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("predictionGIRONDE");
        const collection = db.collection("NAISSANCES ANNUEL G")

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

        const augmentation = (((nbnaissances.slice(-1)[0] - nbnaissances.slice(-2)[0]) / nbnaissances.slice(-2)[0]) * 100).toFixed(2)


        const json = {
            // 'data' : {
                        'Année' : annee,
                        'Naissances par an' : nbnaissances,
                        'Augmentation': augmentation,
                        'name' : 'Naissances annuelles'

                    // }
        }

        res.send(json);


    } catch (e) {
        console.error(e);
    }
};