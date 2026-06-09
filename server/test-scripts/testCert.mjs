import dotenv from 'dotenv';
import connectDB from '../src/config/db.config.js';
import mongoose from 'mongoose';
import * as resumeService from '../src/services/resume.service.js';

dotenv.config({ path: 'server/.env' });

const run = async () => {
  try {
    await connectDB();
    const userId = new mongoose.Types.ObjectId();
    const created = await resumeService.createResume(userId, { title: 'test-script-resume' });
    console.log('Created resume id:', created._id.toString());

    console.log('Attempting to update certifications with array of strings...');
    const result = await resumeService.updateSection(created._id, userId, 'certifications', ['Python Programming']);
    console.log('Update succeeded. certifications stored as:', result.sections.certifications);
  } catch (err) {
    console.error('Error during test:', err);
  } finally {
    process.exit(0);
  }
};

run();
