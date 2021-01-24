import FakeStudentRepository from '@modules/students/repositories/fakes/FakeStudentRepository'
import FindStudentsService from '@modules/students/services/FindStudentsService';

let fakeStudentRepository: FakeStudentRepository;

let findStudents: FindStudentsService;

describe('FindStudents', () => {
  beforeEach(() => {
    fakeStudentRepository = new FakeStudentRepository();

    findStudents = new FindStudentsService(fakeStudentRepository);
  })

  it('should be able to list students', async () => {
    await fakeStudentRepository.create({
      name: 'John Doe',
      quarter: 'Q2',
      communication: 10,
      discipline: 10,
      proactivity: 10,
      technical_level: 8,
    })

    await fakeStudentRepository.create({
      name: 'John Doe',
      quarter: 'Q2',
      communication: 10,
      discipline: 10,
      proactivity: 10,
      technical_level: 8,
    })

    const students = await findStudents.execute({ skip: 1, take: 1 })

    expect(students).toHaveLength(2)
  })
})
