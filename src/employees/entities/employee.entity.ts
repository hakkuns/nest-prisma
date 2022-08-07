import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: '1',
    description: 'The Id of the employee',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Kawasoe',
    description: 'The last name of the employee',
  })
  lastName: string;

  @Column()
  @ApiProperty({
    example: 'Satoshi',
    description: 'The first name of the employee',
  })
  firstName: string;

  @Column()
  @ApiProperty({
    example: '40',
    description: 'The age of the employee',
  })
  age: number;
}
