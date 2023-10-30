import * as dotenv from 'dotenv';
dotenv.config();

export const appEnv = process.env.DATABASE_URL || '';
