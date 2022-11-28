import clientPromise from "../../../lib/mongodb.ts";

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


        collection = db.collection("NAISSANCES ANNUEL G")
        const nbnaissances = []

        result = await collection.find({Année : {$gt : 2012, $lt : 2021 }}).toArray()
        // console.log(result);
        for (let element of result) {
            // console.log(element['Année'])
            nbnaissances.push(element['Naissances par an'])
        }
        // console.log(nbnaissances)


    //// CALCUL DE LA RECOMMANDATION DU NOMBRE DE SAGE FEMME
    const recommandation = []
    for (let i = 0; i < annee.length; i++) {
        // console.log([nbnaissances[i], nbmaternite[i], annee[i]])
        recommandation.push( parseFloat((((nbnaissances[i] / nbmaternite[i]) / 2 / 365) + 1 ) * 5.66).toFixed(2)  )
    }
    // console.log(recommandation)

        

        const json = {
            // 'data' : {
                        'Année' : annee,
                        'Total' : total,
                        'Nombre de maternités' : nbmaternite,
                        'Recommandation' : recommandation
                    // }
        }

        res.send(json);


    } catch (e) {
        console.error(e);
    }
};