import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStudents1611308570442 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'quarter',
            type: 'varchar',
          },
          {
            name: 'discipline',
            type: 'integer',
          },
          {
            name: 'proactivity',
            type: 'integer',
          },
          {
            name: 'communication',
            type: 'integer',
          },
          {
            name: 'technical_level',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('students');
  }
}
