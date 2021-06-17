import { EventManager } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  public currentPage = new BehaviorSubject<string>('services');

  public breakpoint = 1100;

  get onResize$(): Observable<Window> {
    return this.resizeSubject.asObservable();
  }

  private resizeSubject: Subject<Window>;

  constructor(private eventManager: EventManager) {
    this.resizeSubject = new Subject();
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
  }

  private onResize(event: UIEvent) {
    this.resizeSubject.next(<Window>event.target);
  }


}
