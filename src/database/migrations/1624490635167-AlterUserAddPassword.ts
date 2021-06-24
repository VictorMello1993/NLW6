import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

//ALTER TABLE users ADD(password varchar)
export class AlterUserAddPassword1624490635167 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'password')
    }
}
