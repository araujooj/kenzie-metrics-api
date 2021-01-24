import AppError from '@shared/errors/AppError';
import FakeStudentRepository from '@modules/students/repositories/fakes/FakeStudentRepository'
import CreateStudentService from '@modules/students/services/CreateStudentService';

let fakeStudentRepository: FakeStudentRepository;

let createStudent: CreateStudentService;

describe('CreateStudent', () => {
  beforeEach(() => {
    fakeStudentRepository = new FakeStudentRepository();

    createStudent = new CreateStudentService(fakeStudentRepository);
  })

  it('should be able to create a new student', async () => {
    const student = await createStudent.execute({
      name: 'John Doe',
      quarter: 'Q2',
      communication: 10,
      discipline: 10,
      proactivity: 10,
      technical_level: 8,
    })

    expect(student).toHaveProperty('id')
  })
})
