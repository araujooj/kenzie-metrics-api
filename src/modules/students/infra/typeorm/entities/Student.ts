import Grade from '@modules/grades/infra/typeorm/entities/Grade';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('students')
class Student {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 name: string;

 @Column()
 quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';

 @Column()
 discipline: number;

 @Column()
 proactivity: number;

 @Column()
 communication: number;

 @Column()
 technical_level: number;

 @OneToOne(() => Grade, (grades) => grades.student, { eager: true })
 grade: Grade;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;
}
export default Student
