import IPagination from '@shared/dtos/IPagination';
import IStudent from '../dtos/IStudent';
import Student from '../infra/typeorm/entities/Student';

export default interface IStudentsRepository {
 create(student: IStudent): Promise<Student>;
 save(student: Student): Promise<Student>;
 findById(id: string): Promise<Student | undefined>;
 findAll(pagination: IPagination): Promise<Student[]>;
 findByQuarter(pagination: IPagination, quarter: string): Promise<Student[]>;
}
