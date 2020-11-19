import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {UploadService} from "../Services/upload-service.service";

@Component({
  selector: 'app-pdftojpg',
  templateUrl: './pdftojpg.component.html',
  styleUrls: ['./pdftojpg.component.css'],
})
export class PdftojpgComponent{
  title = 'convertPDF';
  files: any = [];

  constructor(private sanitizer: DomSanitizer,
              private uploadService: UploadService) { }

  convert(){
    this.uploadService.upload(this.files[0]);
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
