import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty({ default: false })
    completed: boolean;
}
