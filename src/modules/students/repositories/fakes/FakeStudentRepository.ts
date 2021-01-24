import IStudent from '@modules/students/dtos/IStudent';
import Student from '@modules/students/infra/typeorm/entities/Student';
import IPagination from '@shared/dtos/IPagination';
import IStudentsRepository from '../IStudentsRepository';

export default class FakeStudentRepository implements IStudentsRepository {
  public async findByQuarter(pagination: IPagination, quarter: string): Promise<Student[]> {
    throw new Error('Method not implemented.');
  }

  public async create(student: IStudent): Promise<Student> {
    throw new Error('Method not implemented.');
  }

  public async findById(id: string): Promise<Student | undefined> {
    throw new Error('Method not implemented.');
  }

  public async save(student: Student): Promise<Student> {
    throw new Error('Method not implemented.');
  }

  public async findAll(pagination: IPagination, quarter?: string): Promise<Student[]> {
    throw new Error('Method not implemented.');
  }
}
