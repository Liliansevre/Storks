import clientPromise from "../../lib/mongodb.ts";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("predictionGIRONDE");
        const collection = db.collection("POP ANNUELLE G")

        // const predi = await db.listCollections().toArray();

        const result = await collection.find({}).toArray()
        // console.log(result)
        const annee = []
        const populationAnnuelle = []
        for (let element of result) {
            // console.log(element['Année'])
            annee.push(element['Année'])
            populationAnnuelle.push(element['Gironde'])
        }
        // console.log(annee)
        // console.log(agemoyen);

        const augmentation = (((populationAnnuelle.slice(-1)[0] - populationAnnuelle.slice(-2)[0]) / populationAnnuelle.slice(-2)[0]) * 100).toFixed(2)

        
        const json = {
            // 'data' : {
            'Année': annee,
            'Data': populationAnnuelle,
            'Augmentation': augmentation,
            'taux': augmentation > 0 ? 'bg-emerald-500' : 'bg-red-400',
            'color-chart': augmentation > 0 ? 'green' : 'red',
            'name' : 'Population annuelle'
            // }
        }

        res.send(json);


    } catch (e) {
        console.error(e);
    }
};