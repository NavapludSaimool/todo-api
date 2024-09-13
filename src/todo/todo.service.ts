import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;

  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}


  async create(todoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(todoDto);
    return await this.todoRepository.save(todo);
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find()
  }

  async findOne(id: number): Promise<Todo> {
    return await this.todoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    await this.todoRepository.update(id, updateTodoDto);
    return this.findOne(id)
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
