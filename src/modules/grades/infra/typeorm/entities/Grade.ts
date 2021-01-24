import Student from '@modules/students/infra/typeorm/entities/Student';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('grades')
class Grade {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 sprint1_grade: number;

 @Column()
 sprint2_grade: number;

 @Column()
 sprint3_grade: number;

 @Column()
 sprint4_grade: number;

 @Column()
 sprint5_grade: number;

 @Column()
 sprint6_grade: number;

 @OneToOne(() => Student, (students) => students.grade)
 @JoinColumn({ name: 'student_id' })
 student: Student

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;
}
export default Grade
