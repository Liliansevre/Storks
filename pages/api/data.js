import clientPromise from "../../lib/mongodb.ts";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("predictionFRANCE");

        const predi = await db.listCollections().toArray();

        res.json(predi);
    } catch (e) {
        console.error(e);
    }
};