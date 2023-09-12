import { NextResponse } from 'next/server';
import Database from '../database/database';

export async function GET() {
  try {
    const db = Database.getInstance()
    await db.connect();
    if (db.isConnected) {
      const query = 'SELECT * FROM EMPLOYEE';
      const result = await db.query(query);
      return NextResponse.json({ items: result.rows });
    } else {
      throw new Error('Error al conectar a la base de datos.');
    }
  } catch (error) {
    console.error(error);
  }
}