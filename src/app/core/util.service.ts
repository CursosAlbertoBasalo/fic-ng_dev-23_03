import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  getParam(activatedRoute: ActivatedRoute, paramName = 'slug'): string {
    return activatedRoute.snapshot.paramMap.get(paramName) || '';
  }
}
