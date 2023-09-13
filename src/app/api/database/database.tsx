import { Client, QueryResult } from 'pg'

class Database {
  private static instance: Database | null = null
  public isConnected: boolean = false
  private client: Client | null = null

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
     Database.instance =  new Database()
    }
    return Database.instance
  }

  public async connect(): Promise<void> {
    if (this.isConnected) {
      console.log('Ya estás conectado a la base de datos.')
      return
    }

    const dbConfig = {
      user: 'postgres',
      password: '|F8vpRxD^~qQ.875',
      host: '35.238.29.44',
      port: 5432,
      database: 'postgres'
    }

    try {
      this.client = new Client(dbConfig)
      await this.client.connect()
      this.isConnected = true
      console.log('Conexión a la base de datos PostgreSQL establecida.')
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error)
    }
  }

  public async query(sql: string): Promise<QueryResult> {
    if (!this.isConnected) {
      throw new Error('No estás conectado a la base de datos.');
    }

    try {
      const result = await this.client?.query(sql);
      if (result) {
        return result;
      } else {
        throw new Error('La consulta no devolvió ningún resultado.');
      }
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
      throw error;
    }
  }
}

export default Database
