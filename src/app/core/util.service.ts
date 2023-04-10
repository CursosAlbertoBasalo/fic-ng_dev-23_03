import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  getParam(activatedRoute: ActivatedRoute, param: string = 'slug'): string {
    return activatedRoute.snapshot.paramMap.get(param) || '';
  }
}
