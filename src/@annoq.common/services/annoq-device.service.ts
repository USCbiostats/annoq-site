import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnoqDeviceService {
  private mobileWidth = 768;

  constructor() { }

  public isMobile(): boolean {
    return window.innerWidth <= this.mobileWidth;
  }
}
