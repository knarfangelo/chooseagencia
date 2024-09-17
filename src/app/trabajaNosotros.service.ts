import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TrabajaNosotrosService {

  api = 'https://chooseagencia.com/api/curriculums.php';

  constructor(private http:HttpClient) {

  }

  getCurriculums() {
    return this.http.get(this.api);
  }
  addCurriculum(curriculum: any) {
    return this.http.post(this.api, curriculum);
  }

}
