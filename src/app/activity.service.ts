import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Activity } from 'src/interfaces/Activity';

const URL = 'https://discord-integrations.nhcarrigan.com/activity';
@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  public cache = new Map<string, Activity[]>();
  constructor(private http: HttpClient) {}

  public getData(): Observable<Activity[]> {
    const cached = this.cache.get(URL);
    if (cached) {
      return of(cached);
    }
    const response = this.http.get<Activity[]>(URL);
    response.subscribe((data) => this.cache.set(URL, data));
    return response;
  }

  public clearCache(): void {
    this.cache = new Map();
  }
}
