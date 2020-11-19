import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  upload(file: File){
    const formData: FormData = new FormData();

    formData.append('file', file);
    this.http.post<any>(`${this.baseUrl}/upload`,formData).subscribe((response) => {
      if(response.status === 200){
        console.log("FILE UPLOADED SUCCESSFULLY");
      }
      else{
        console.log("FILE NOT UPLOADED SUCCESSFULLY");
      }
    });
  }

}
