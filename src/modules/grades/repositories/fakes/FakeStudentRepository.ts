import IGrade from '@modules/grades/dtos/IGrade';
import Grade from '@modules/grades/infra/typeorm/entities/Grade';
import IPagination from '@shared/dtos/IPagination';
import IGradesRepository from '../IGradesRepository';

export default class FakeStudentRepository implements IGradesRepository {
  public async create(student: IGrade): Promise<Grade> {
    throw new Error('Method not implemented.');
  }

  public async save(student: Grade): Promise<Grade> {
    throw new Error('Method not implemented.');
  }

  public async findById(id: string): Promise<Grade | undefined> {
    throw new Error('Method not implemented.');
  }

  public async findAll(pagination: IPagination): Promise<Grade[]> {
    throw new Error('Method not implemented.');
  }
}
