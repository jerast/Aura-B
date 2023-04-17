import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const DB_CNN = process.env.DB_CNN;
export const DB_OFF = process.env.DB_OFF;
export const SECRET_JWT_SEED = process.env.SECRET_JWT_SEED;