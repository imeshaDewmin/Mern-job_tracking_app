import { Router } from "express";
const router = Router();

import { validateJobInput, validateIdParam } from '../middleware/validationMiddleware.js';

import {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob,
    showStats,
} from '../controllers/jobController.js'
import { checkForTestUser } from "../middleware/authMiddleware.js";



router.get('/', getAllJobs)
router.post('/', checkForTestUser, validateJobInput, createJob)

router.get('/stats', showStats)

router.get('/:id', validateIdParam, getSingleJob)
router.patch('/:id', checkForTestUser, validateIdParam, validateJobInput, updateJob)
router.delete('/:id', checkForTestUser, validateIdParam, deleteJob)

export default router;