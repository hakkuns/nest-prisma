import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(data: any): Promise<Employee> {
    return this.employeeRepository.save(data);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
}
