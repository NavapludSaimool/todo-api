import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new todo item', () => {
      const createTodoDto: CreateTodoDto = {
        title: 'Test Todo',
        description: 'This is a test',
        completed: false,
      };

      const result = service.create(createTodoDto);
      expect(result).toHaveProperty('id');
      expect(result.title).toEqual(createTodoDto.title);
      expect(result.description).toEqual(createTodoDto.description);
      expect(result.completed).toEqual(createTodoDto.completed);
    });
  });

  describe('findAll', () => {
    it('should return an array of todos', () => {
      const createTodoDto: CreateTodoDto = {
        title: 'Todo 1',
        description: 'First todo',
        completed: false,
      };

      // Create a todo first
      service.create(createTodoDto);

      const todos = service.findAll();
      expect(todos.length).toBeGreaterThan(0);
      expect(todos[0]).toHaveProperty('id');
    });
  });

  describe('findOne', () => {
    it('should return a specific todo by id', () => {
      const createTodoDto: CreateTodoDto = {
        title: 'Todo 1',
        description: 'Find this todo by id',
        completed: false,
      };

      // Create a todo
      const newTodo = service.create(createTodoDto);

      const foundTodo = service.findOne(newTodo.id);
      expect(foundTodo).toBeDefined();
      expect(foundTodo.id).toEqual(newTodo.id);
    });

    it('should return undefined if todo not found', () => {
      const todo = service.findOne(999); // Non-existent ID
      expect(todo).toBeUndefined();
    });
  });

  describe('update', () => {
    it('should update a todo item', () => {
      const createTodoDto: CreateTodoDto = {
        title: 'Todo to Update',
        description: 'Before update',
        completed: false,
      };

      // Create a todo first
      const createdTodo = service.create(createTodoDto);

      const updateTodoDto: UpdateTodoDto = {
        title: 'Updated Title',
        completed: true,
      };

      const updatedTodo = service.update(createdTodo.id, updateTodoDto);
      expect(updatedTodo.title).toEqual('Updated Title');
      expect(updatedTodo.completed).toBe(true);
    });

    it('should return undefined when trying to update a non-existing todo', () => {
      const updateTodoDto: UpdateTodoDto = {
        title: 'Non-existent Update',
        completed: true,
      };

      const updatedTodo = service.update(999, updateTodoDto); // Non-existent ID
      expect(updatedTodo).toBeUndefined();
    });
  });

  describe('remove', () => {
    it('should remove a todo item', () => {
      const createTodoDto: CreateTodoDto = {
        title: 'Todo to Remove',
        description: 'This will be removed',
        completed: false,
      };

      // Create a todo first
      const createdTodo = service.create(createTodoDto);

      // Remove the created todo
      service.remove(createdTodo.id);

      const todos = service.findAll();
      const removedTodo = service.findOne(createdTodo.id);

      expect(todos).not.toContainEqual(createdTodo);
      expect(removedTodo).toBeUndefined();
    });

    it('should do nothing if trying to remove a non-existent todo', () => {
      const todosBeforeRemove = service.findAll();

      // Try to remove non-existent todo
      service.remove(999); // Non-existent ID

      const todosAfterRemove = service.findAll();
      expect(todosAfterRemove.length).toEqual(todosBeforeRemove.length);
    });
  });
});

