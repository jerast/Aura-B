import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8000;
export const DB_CNN = process.env.DB_CNN || 'mongodb+srv://user:password@cluster.cluster_id.mongodb.net/db';
export const DB_OFF = process.env.DB_OFF || 'mongodb://localhost:27017/db';
export const SECRET_JWT_SEED = process.env.SECRET_JWT_SEED;
