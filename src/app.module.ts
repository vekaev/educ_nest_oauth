import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { entities } from './typeorm';

const envFilePath =
  process.env.ENVIRONMENT === 'PRODUCTION'
    ? '.env.production'
    : '.env.development';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath }),
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: Number.parseInt(process.env.MYSQL_DB_PORT),
      username: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASS,
      database: process.env.MYSQL_DB_NAME,
      entities,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
