import { TestBed } from '@angular/core/testing';

import { PdftoImageServiceAdapter} from "./pdftoimage.service.adapter";

describe('UploadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdftoImageServiceAdapter = TestBed.get(PdftoImageServiceAdapter);
    expect(service).toBeTruthy();
  });
});
