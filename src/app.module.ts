import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '150.136.95.109',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'db-user',
      entities: [ __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
