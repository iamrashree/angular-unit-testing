import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, of, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    const todos = [1, 2, 3];
    // Arrange
    spyOn(service, 'getTodos').and.callFake(() => {
      return of(todos);
    });

    // Act
    component.ngOnInit();

    // Assert
    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake((t: any) => {
      return of();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', () => {
    const todo = [{ id: 1 }];
    spyOn(service, 'add').and.returnValue(of(todo));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server return an error when adding new todo', () => {
    const error = 'Error from server';
    spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call the service to delete a todo item if the user confirms to delete', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(of());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);

  });

  // x to disable test
  xit('should NOT call the service when denies to delete todo item', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(of());

    component.delete(1);

    expect(spy).not.toHaveBeenCalledWith(1);

  });
});
