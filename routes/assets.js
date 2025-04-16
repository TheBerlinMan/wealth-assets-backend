import { Router } from 'express';
import * as assetsCtrl from '../controllers/assets.js';

const router = Router();

router.get('/', assetsCtrl.index);

export { router };