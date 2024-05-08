/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

dotenvExpand.expand(dotenv.config());

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATASOURCE_HOST,
        port: parseInt(process.env.DATASOURCE_PORT),
        username: process.env.DATASOURCE_USERNAME,
        password: process.env.DATASOURCE_PASSWORD,
        database: process.env.DATASOURCE_DATABASE,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];