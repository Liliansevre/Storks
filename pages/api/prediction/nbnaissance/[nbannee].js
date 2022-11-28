// export default function handler(req, res) {
//     const { nbannee } = req.query
//     console.log(req.query)
//     res.end(`Post: ${nbannee}`)
//   }
  

export default function predinaissance (req, res) {
    const { nbannee } = req.query
    const annee = []
    const predi = []

    // création des nouvelles dates par rapport au chiffre donné
    for (let i = 0; i < nbannee; i++){
        annee.push(new Date().getFullYear()+i)
    }
    // console.log(annee)

    for (let i of annee){
        predi.push( Math.round(( 77.077 * i ) - 138443.773))
    }
    // console.log(predi)

    const json = {
                    'Année' : annee,
                    'Naissances par an' : predi
    }

        res.send(json);
};