import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { <%=classify(name)%> } from '../interfaces/<%=dasherize(name)%>';

const URL = '/api/cliente';

@Injectable()
export class <%=classify(name)%>Service {
  constructor(private http: HttpClient) { }

  get(): Observable<<%=classify(name)%>[]> {
    return this.http.get<<%=classify(name)%>[]>(URL);
  }

  getById(id: number): Observable<<%=classify(name)%>> {
    if (id) {
      return this.http.get<<%=classify(name)%>>(`${URL}/${id}`);
    } else {
      return of({
        id: 0,
        ragioneSociale: '',
        contatto: '',
        indirizzo: '',
        citta: '',
        nazione: '',
        premium: false
      });
    }
  }

  add(item: <%=classify(name)%>) {
    return this.http.post<<%=classify(name)%>>(URL, item);
  }

  update(id: number, item: <%=classify(name)%>) {
    return this.http.put<<%=classify(name)%>>(`${URL}/${id}`, item);
  }

  delete(id: number) {
    return this.http.delete<<%=classify(name)%>>(`${URL}/${id}`);
  }

  save(item: <%=classify(name)%>) {
    if (item.id === 0) {
      return this.add(item);
    } else {
      return this.update(item.id, item);
    }
  }
}
