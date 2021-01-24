import { inject, injectable } from 'tsyringe';
import IStudent from '../dtos/IStudent';
import Student from '../infra/typeorm/entities/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

@injectable()
export default class CreateStudentService {
  constructor(
  @inject('StudentRepository')
  private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({
    communication, discipline, name, proactivity, quarter, technical_level,
  }: IStudent): Promise<Student> {
    const student = await this.studentsRepository.create({
      communication, discipline, name, proactivity, quarter, technical_level,
    })

    return student;
  }
}
