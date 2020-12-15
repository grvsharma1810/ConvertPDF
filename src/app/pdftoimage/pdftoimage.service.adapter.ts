import { Injectable } from '@angular/core';
import {PdftoImageComponent} from "./pdftoimage.component";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PdftoImageServiceAdapter {

  private baseUrl = 'http://localhost:8000';

  constructor(private http : HttpClient) {}

  convert(file: File): Promise<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    return this.http.post<any>(`${this.baseUrl}/pdftoimage`, formData, {responseType: 'json'})
      .toPromise()
      .then(response => {
        return response;
      }, error => {
        alert('Error: Press Ctrl + F5 to update your software or Contact Admin');
        return null;
      })

    // this.http.post<any>(`${this.baseUrl}/pdftoimage`, formData, {responseType: 'json'}).subscribe((response) => {
    //     console.log(response);
    //     alert("FILE CONVERTED SUCCESSFULLY");
    //   },
    //   (error) => {                              //Error callback
    //     alert(error.error.text);
    //     console.log("FILE NOT UPLOADED SUCCESSFULLY");
    //   }
    // )
  }
}
