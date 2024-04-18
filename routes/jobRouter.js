import { Router } from "express";
const router = Router();
import { validateJobInput,validateIdParam } from '../middleware/validationMiddleware.js';

import {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob,
} from '../controllers/jobController.js'

router.get('/', getAllJobs)
router.post('/', validateJobInput, createJob)
router.get('/:id', validateIdParam,getSingleJob)
router.patch('/:id', validateIdParam,validateJobInput, updateJob)
router.delete('/:id', validateIdParam,deleteJob)

export default router;