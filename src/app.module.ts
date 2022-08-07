import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { Employee } from './employees/entities/employee.entity';
import { User } from './users/entities/user.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Employee],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Employee]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [UsersController, EmployeesController],
  providers: [UsersService, EmployeesService],
})
export class AppModule {}
