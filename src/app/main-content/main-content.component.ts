import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from "jspdf";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  title = 'convertPDF';
  fileName: string;
  filePreview: string;
  files: any = [];

  constructor(private sanitizer: DomSanitizer) { }

  isImage(event): Boolean {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      if(element.type != "image/jpeg" && element.type != "image/png") {
        return false;
      }
    }
    return true;
  }

  uploadFile(event) {
    if(this.isImage(event)) {
      for (let index = 0; index < event.length; index++) {
        const element = event[index];
        console.log(element);
        this.files.push(element);
      }
    } else{
      alert("Please Upload An Image")
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

  readFile(file, doc) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = res => {
        console.log("on Load is Triggered");
        let image = new Image(file);
        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();
        const ratio = height / width;
        const imageHeight = ratio * image.height;
        const base64ImgString = (reader.result as string).split(',')[1];
        if(file.type == "image/jpeg"){
          doc.addImage(base64ImgString, 'JPEG', 0, 0, width, imageHeight, undefined, 1);
        } else if(file.type == "image/png"){
          doc.addImage(base64ImgString, 'PNG', 0, 0, width, imageHeight, undefined, 1);
        }
        resolve(doc);
      };
      reader.onerror = err => reject(err);
      reader.readAsDataURL(file);
    });
  }

  async download() {
    if (this.files.length > 0) {
      let doc = new jsPDF("p", "px", "a4", true);
      for (let i = 0; i < this.files.length; i++) {
        await this.readFile(this.files[i], doc);
        if (i != this.files.length - 1) {
          doc.addPage();
        }
      }
      doc.save("ConvertedToPDF");
      this.files = [];
    } else {
      alert("Please Upload Files To Convert");
    }
  }

  // download1() {
  //   console.log("Called");
  //   if (this.files.length > 0) {
  //     let doc = new jsPDF("p", "px", "a4");
  //     for (let i = 0; i < this.files.length; i++) {
  //       let reader = new FileReader();
  //       console.log(this.files[i]);
  //       let file = this.files[i];
  //       let image = new Image(file);
  //       reader.readAsDataURL(file);
  //       reader.onload = () => {
  //         console.log("on Load is Triggered");
  //         this.fileName = file.name + " " + file.type;
  //         const width = doc.internal.pageSize.getWidth();
  //         const height = doc.internal.pageSize.getHeight();
  //         const ratio = height / width;
  //         const imageHeight = ratio * image.height;
  //         const base64ImgString = (reader.result as string).split(',')[1];
  //         doc.addImage(base64ImgString, 'JPEG', 0, 0, width, imageHeight);
  //         // doc.addPage();
  //         // this.filePreview = 'data:image/png' + ';base64,' + base64ImgString;
  //       };
  //     }
  //     console.log("Save");
  //     doc.save('TestPDF')
  //   } else {
  //     alert("Please Upload File to Convert");
  //   }
  // }

  // create a function that returns a promise
  // async readFileAndSaveToDoc(file, doc) {
  //   let reader = new FileReader();
  //   let image = new Image(file);
  //   await reader.readAsDataURL(file);
  //   reader.onload = function() {
  //     // add to doc here
  //     console.log("on Load is Triggered");
  //     const width = doc.internal.pageSize.getWidth();
  //     const height = doc.internal.pageSize.getHeight();
  //     const ratio = height / width;
  //     const imageHeight = ratio * image.height;
  //     const base64ImgString = (reader.result as string).split(',')[1];
  //     doc.addImage(base64ImgString, 'JPEG', 0, 0, width, imageHeight);
  //     doc.addPage();
  //     doc.save("TEMPPDF");
  //   };
  // }

  // download() {
  //   let doc = new jsPDF("p", "px", "a4");
  //   for (let i = 0; i < this.files.length; i++) {
  //     this.readFileAndSaveToDoc(this.files[i], doc);
  //   }
  //   console.log("SAVE");
  //   doc.save("TestPDF")
  //   // // create an array to hold your promises
  //   // let promises = [];
  //   // for (let i = 0; i < this.files.length; i++) {
  //   //   // push to the array
  //   //   promises.push(this.readFileAndSaveToDoc(this.files[i], doc));
  //   // }
  //   // // use reduce to create a chain in the order of the promise array
  //   // promises.reduce(function(cur, next) {
  //   //   return cur.then(next);
  //   // }, Promise.resolve()).then(function() {
  //   //   console.log("Save");
  //   //   doc.save('TestPDF')
  //   // }).catch(function(error) {
  //   //   console.log("ERROR");
  //   // });
  // }

  // download2() {
  //   let currIndex = this.length;
  //   let doc = new jsPDF("p", "px", "a4");
  //   doc = MainContentComponent.UploadMe(currIndex, this.files, doc);
  //   console.log("save");
  //   doc.save('TestPDF')
  // }
  //
  //
  // static UploadMe(currIndex, files, doc) {
  //   currIndex = currIndex - 1;
  //   console.log("curr Index is : " + currIndex);
  //   if (currIndex > -1) {
  //     let file = files[currIndex];
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = function () {
  //       let image = new Image(file);
  //       const width = doc.internal.pageSize.getWidth();
  //       const height = doc.internal.pageSize.getHeight();
  //       const ratio = height / width;
  //       const imageHeight = ratio * image.height;
  //       const base64ImgString = (reader.result as string).split(',')[1];
  //       doc.addImage(base64ImgString, 'JPEG', 0, 0, width, imageHeight);
  //       doc.addPage();
  //       return MainContentComponent.UploadMe(currIndex, files, doc);
  //     };
  //   }
  //   return doc;
  // }

  // onFileChanged(event: { target: { files: any[]; }; }) {
  //   let reader = new FileReader();
  //   if (event.target.files && event.target.files.length > 0) {
  //     console.log(event.target.files);
  //     let file = event.target.files[0];
  //     let image = new Image(file);
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.fileName = file.name + " " + file.type;
  //       const doc = new jsPDF("p", "px", "a4");
  //       const width = doc.internal.pageSize.getWidth();
  //       const height = doc.internal.pageSize.getHeight();
  //       const ratio = height / width;
  //       const imageHeight = ratio * image.height;
  //       const base64ImgString = (reader.result as string).split(',')[1];
  //       doc.addImage(base64ImgString, 'JPEG', 0, 0, width, imageHeight);
  //       doc.addPage();
  //       doc.addImage(base64ImgString, 'JPEG', 0, 0, width, imageHeight);
  //       this.filePreview = 'data:image/png' + ';base64,' + base64ImgString;
  //       doc.save('TestPDF')
  //     };
  //   }
  // }
  //
  // sanitize(url: string) {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }

}
