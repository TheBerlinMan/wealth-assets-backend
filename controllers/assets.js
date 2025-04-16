import { Asset } from '../models/asset.js';

async function index(req, res) {
    try {
        const assets = await Asset.find();
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { index };