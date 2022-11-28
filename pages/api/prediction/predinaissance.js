import clientPromise from "../../../lib/mongodb.ts";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("predictionGIRONDE");
        const collection = db.collection("NAISSANCES ANNUEL G")

        // const predi = await db.listCollections().toArray();

//// RECUPERATION DE LA DATA
        const result = await collection.find({}).toArray()
        // console.log(result)
        const annee = []
        const nbnaissances = []
        for (let element of result) {
            // console.log(element['Année'])
            annee.push(element['Année'])
            nbnaissances.push(element['Naissances par an'])
        }

    ///// AJOUT DES PREDI SUR 10 ANS
        var anneepredi = []

        for (let i = 0; i < 10; i++){
            annee.push(new Date().getFullYear()+i)
            anneepredi.push(new Date().getFullYear()+i)
        }
        // console.log(annee)
    
        for (let i of anneepredi){
            nbnaissances.push( Math.round(( 77.077 * i ) - 138443.773))
        }
        // console.log(annee)
        // console.log(nbnaissances);


        const json = {
            // 'data' : {
                        'Année' : annee,
                        'Naissances par an' : nbnaissances
                    // }
        }

        res.send(json);


    } catch (e) {
        console.error(e);
    }
};