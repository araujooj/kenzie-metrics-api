import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('grades')
class Grade {
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

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;
}
export default Grade
