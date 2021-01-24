import IPagination from '@shared/dtos/IPagination';
import { inject, injectable } from 'tsyringe';
import Student from '../infra/typeorm/entities/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

@injectable()
export default class FindStudentsService {
  constructor(
  @inject('StudentRepository')
  private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({
    skip, take,
  }: IPagination): Promise<Student[]> {
    const student = await this.studentsRepository.findAll({ skip, take })

    return student;
  }
}
