import { Controller, Get, Req, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
    private jwtService: JwtService,
  ) {}

  @Get('')
  async employees(@Req() request: Request) {
    try {
      console.log(request.cookies);
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const employees = await this.employeesService.findAll();

      return employees;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
