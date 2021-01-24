import AppError from '@shared/errors/AppError';
import FakeStudentRepository from '@modules/students/repositories/fakes/FakeStudentRepository'
import FindSpecificStudentService from '@modules/students/services/FindSpecificStudentService';

let fakeStudentRepository: FakeStudentRepository;

let findStudents: FindSpecificStudentService;

describe('FindSpecificStudent', () => {
  beforeEach(() => {
    fakeStudentRepository = new FakeStudentRepository();

    findStudents = new FindSpecificStudentService(fakeStudentRepository);
  })

  it('should be able to list a student by id ', async () => {
    const student = await fakeStudentRepository.create({
      name: 'John Doe',
      quarter: 'Q2',
      communication: 10,
      discipline: 10,
      proactivity: 10,
      technical_level: 8,
    })

    const students = await findStudents.execute({ student_id: student.id })

    expect(students).toHaveProperty('id')
  })

  it('should not be able to list a non-existing student ', async () => {
    await expect(findStudents.execute({ student_id: 'non-existing-id' })).rejects.toBeInstanceOf(AppError)
  })
})
