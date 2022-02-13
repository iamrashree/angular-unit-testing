
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo): Observable<Object> {
    return this.http.post('...', todo);
  }

  getTodos(): Observable<Object> {
    return this.http.get('...');
  }

  delete(id): Observable<Object> {
    return this.http.delete('...');
  }
}
