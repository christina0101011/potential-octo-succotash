import { EventManager } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  public currentPage = new BehaviorSubject<string>('services');
  public serviceBlock = new Subject();

  public breakpoint = 1100;

  get onResize$(): Observable<Window> {
    return this.resizeSubject.asObservable();
  }

  private resizeSubject: Subject<Window>; // use to hide html elements to remove them from dom

  constructor(
    private eventManager: EventManager,
    private http: HttpClient) {
    this.resizeSubject = new Subject();
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
  }

  private onResize(event: UIEvent) {
    this.resizeSubject.next(<Window>event.target);
  }

  getCases() {
    return this.http.get('../assets/cases.json')
  }
}
