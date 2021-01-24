import IPagination from '@shared/dtos/IPagination';
import IGrade from '../dtos/IGrade';
import Grade from '../infra/typeorm/entities/Grade';

export default interface IGradesRepository {
 create(student: IGrade): Promise<Grade>;
 save(student: Grade): Promise<Grade>;
 findById(id: string): Promise<Grade | undefined>;
 findAll(pagination: IPagination): Promise<Grade[]>;
}
