import dotenv from 'dotenv';

dotenv.config();

export const authorizationSecret = process.env.AUTHORIZATION_SECRET;
export const connectionString = process.env.CONNECTION_STRING.trim();
