import { v4 as uuid } from 'uuid';
import IStudent from '@modules/students/dtos/IStudent';
import Student from '@modules/students/infra/typeorm/entities/Student';
import IPagination from '@shared/dtos/IPagination';
import IStudentsRepository from '../IStudentsRepository';

export default class FakeStudentRepository implements IStudentsRepository {
  private students: Student[] = []

  public async findByQuarter(pagination: IPagination, quarter: string): Promise<Student[]> {
    return this.students;
  }

  public async create({
    communication, discipline, name, proactivity, quarter, technical_level,
  }: IStudent): Promise<Student> {
    const student = new Student();

    Object.assign(student, {
      id: uuid(),
      communication,
      discipline,
      name,
      proactivity,
      quarter,
      technical_level,
    })

    this.students.push(student)

    return student;
  }

  public async findById(id: string): Promise<Student | undefined> {
    const findStudent = this.students.find((student) => student.id === id)

    return findStudent
  }

  public async save(student: Student): Promise<Student> {
    const findIndex = this.students.findIndex((findStudent) => findStudent.id === student.id)

    this.students[findIndex] = student;

    return student;
  }

  public async findAll(pagination: IPagination): Promise<Student[]> {
    return this.students;
  }
}
