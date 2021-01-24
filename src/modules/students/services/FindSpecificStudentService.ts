import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Student from '../infra/typeorm/entities/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

interface IRequest {
 student_id: string;
}

@injectable()
export default class FindSpecificStudentService {
  constructor(
  @inject('StudentRepository')
  private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({ student_id }: IRequest): Promise<Student> {
    const student = await this.studentsRepository.findById(student_id)

    if (!student) {
      throw new AppError('Student not found', 404)
    }

    return student;
  }
}
