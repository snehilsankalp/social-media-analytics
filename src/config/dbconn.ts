
import { DataSource } from 'typeorm';
import { Posts } from '../models/Posts';

const AppDataSource = new DataSource ({
  type: 'postgres', 
  host: 'localhost',
  port: 5432, 
  username: 'postgres',
  password: 'root', 
  database: 'postgres',
  logging: true, 
  entities: [Posts],
  migrations: ["src/*.ts"],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Connected to Database")
    })
    .catch((err) => console.log(`Error connecting db ${err}`));

export default AppDataSource;
