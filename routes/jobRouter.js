import { Router } from "express";
const router = Router();
import { validateJobInput } from '../middleware/validationMiddleware.js';

import {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob,
} from '../controllers/jobController.js'

router.get('/', getAllJobs)
router.post('/', validateJobInput, createJob)
router.get('/:id', getSingleJob)
router.patch('/:id', validateJobInput, updateJob)
router.delete('/:id', deleteJob)

export default router;