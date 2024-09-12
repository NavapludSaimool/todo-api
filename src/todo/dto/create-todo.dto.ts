import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class CreateTodoDto {
    @ApiProperty({description: 'Titile of the task'})
    @IsNotEmpty({message: 'the task should have a title'})
    @Length(1, 255)
    title: string;

    @ApiProperty({description: 'Details of the task'})
    @Length(1, 255)
    description: string;

    @ApiProperty({ default: false })
    completed: boolean;
}
