import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {PdftoImageServiceAdapter} from "./pdftoimage.service.adapter";

@Component({
  selector: 'app-pdftoimage',
  templateUrl: './pdftoimage.component.html',
  styleUrls: ['./pdftoimage.component.css'],
})

export class PdftoImageComponent{

  files: any = [];
  converted = false;
  convertedFiles = [];

  constructor(private sanitizer: DomSanitizer,
              private pdftoImageServiceAdapter: PdftoImageServiceAdapter) { }

  convert(){
    this.pdftoImageServiceAdapter.convert(this.files[0]).then(response=>{
        this.converted = true;
        this.convertedFiles = response.files;
        console.log(response);
        alert("FILE CONVERTED SUCCESSFULLY");
    }).catch(error=>{
        alert(error.error.text);
        console.log("FILE NOT UPLOADED SUCCESSFULLY");
      });
  }

  isPDF(event): Boolean {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      if(element.type != "application/pdf") {
        return false;
      }
    }
    return true;
  }

  uploadFile(event) {
    if(this.isPDF(event)) {
      for (let index = 0; index < event.length; index++) {
        let element = event[index];
        element['processing'] = false;
        console.log(element);
        this.files.push(element);
      }
    } else{
      alert("Please Upload A PDF File")
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

}
