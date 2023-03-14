import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'babar.db.elephantsql.com',
      port: 5432,
      username: 'wagpvuel',
      password: 'rdq28wlz6ljWX4X4qXtpunLS_spOJSxM',
      database: 'wagpvuel',
      entities: [User],
      synchronize: true,
      logging: ['query', 'error'],
    }),
    UsersModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
