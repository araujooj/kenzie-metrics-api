import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateGrades1611308603231 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'grades',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'sprint1_grade',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'sprint2_grade',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'sprint3_grade',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'sprint4_grade',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'sprint5_grade',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'sprint6_grade',
            type: 'integer',
            isNullable: true,
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
    await queryRunner.dropTable('grades');
  }
}
