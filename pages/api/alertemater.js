import axios from 'axios'

export default async (req, res) => {
    const alertes = [] ; 
    try {
        const tauxnat = await axios.get('https://storks.vercel.app/api/tauxNat')
        const popannuelle = await axios.get('https://storks.vercel.app/api/populationAnnuelle')
        const naissanceannuelles = await axios.get('https://storks.vercel.app/api/nbnaissances')
        console.log(tauxnat.data['Augmentation'])
        
        if (tauxnat.data['Augmentation'] > 2){
            alertes.push({
                name :tauxnat.data['name'],
                value :tauxnat.data['Augmentation']
            })

        }
        
        if (popannuelle.data['Augmentation'] > 5){
            alertes.push({
                name : popannuelle.data['name'],
                value : popannuelle.data['Augmentation']
            })
        }
        if (naissanceannuelles.data['Augmentation'] > 3){
            alertes.push({
                name :naissanceannuelles.data['name'],
                value :naissanceannuelles.data['Augmentation']
            })
        }
        



        // const json = {

        //     'alertes' : nomalerte,
        //     'valeurs' : valeur
        // }
        console.log(alertes);
        res.send(alertes)


    } catch (e) {
        console.error(e);
    }
};