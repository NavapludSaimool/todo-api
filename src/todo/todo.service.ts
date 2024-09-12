import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;


  create(todoDto: CreateTodoDto): Todo {
    const todo: Todo = {
      id: this.idCounter++,
      ...todoDto,
    };
    this.todos.push(todo);
    return todo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find(todo => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);
    if (todo) {
      Object.assign(todo, updateTodoDto);
    }
    return todo;
  }

  remove(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
