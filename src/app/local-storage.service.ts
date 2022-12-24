import { Injectable } from '@angular/core';
import { IStorageService } from './istorage-service';
// import { IStorageService } from './istorage-service';

@Injectable()
export class LocalStorageService implements IStorageService {
  constructor() {}
  get(key: string): string {
    return localStorage.getItem(key);
  }
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  remove(key: string): void {
    localStorage.removeItem(key);
  }
  clear(): void {
    localStorage.clear();
  }
}
