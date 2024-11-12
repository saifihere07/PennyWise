import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://PennyWise-db_owner:tQ2rhBHzq3KG@ep-lingering-morning-a5pu3ay0.us-east-2.aws.neon.tech/PennyWise-db?sslmode=require');
export const db = drizzle({ client: sql },{schema});