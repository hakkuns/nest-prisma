import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: '1',
    description: 'The Id of the user',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Satoshi',
    description: 'The name of the user',
  })
  name: string;

  @Column({ unique: true })
  @ApiProperty({
    example: 'satoshi@test.com',
    description: 'The email of the user',
  })
  email: string;

  @Column()
  @ApiProperty({
    example: 'password',
    description: 'The password of the user',
  })
  password: string;
}
