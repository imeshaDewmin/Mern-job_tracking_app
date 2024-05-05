import 'express-async-errors';
import { StatusCodes } from 'http-status-codes';
import Job from '../models/JobModel.js';
import mongoose from 'mongoose';
import day from 'dayjs';


export const getAllJobs = async (req, res) => {

    const jobs = await Job.find({ createdBy: req.user.userId })
    res.status(StatusCodes.OK).json({ jobs })
};

export const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
};

export const getSingleJob = async (req, res) => {
    const { id } = req.params;

    const job = await Job.findById(id)

    res.status(StatusCodes.OK).json({ job })
};

export const updateJob = async (req, res) => {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true
    })

    res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob })
};

export const deleteJob = async (req, res) => {

    const { id } = req.params;

    const removedJob = await Job.findByIdAndDelete(id)

    res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob });
};

export const showStats = async (req, res) => {
    const defaultStats = {
        pending: 22,
        interview: 11,
        declined: 4,
    }
    let monthlyApplications = [
        {
            date: 'May 23',
            count: 12,
        },
        {
            date: 'June 23',
            count: 9,
        },
        {
            date: 'July 23',
            count: 3,
        },
    ]
    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
}