import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifToggleService {
  private _showGifs = new BehaviorSubject<boolean>(false);
  readonly showGifs$ = this._showGifs.asObservable();

  toggle(): void {
    this._showGifs.next(!this._showGifs.value);
  }

  get showGifs(): boolean {
    return this._showGifs.value;
  }
}
