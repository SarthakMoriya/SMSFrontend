import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  Input,
  OnInit,
  output,
  ViewChild,
} from '@angular/core';
import * as UC from '@uploadcare/file-uploader';
import '@uploadcare/file-uploader/web/uc-file-uploader-regular.min.css';
import { ToastService } from '../../../services/toast.service';

UC.defineComponents(UC);

@Component({
  selector: 'app-image-uploader',
  imports: [],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageUploaderComponent {
  handleCloseModal = output();
  toastSrv = inject(ToastService);
  @ViewChild('ctxProvider', { static: true }) ctxProviderRef!: ElementRef<
    InstanceType<UC.UploadCtxProvider>
  >;
  files: any = [];
  ngOnInit() {
    this.ctxProviderRef.nativeElement.addEventListener(
      'change',
      this.handleChangeEvent
    );
    this.ctxProviderRef.nativeElement.addEventListener(
      'modal-close',
      this.handleModalCloseEvent
    );
    this.ctxProviderRef.nativeElement.addEventListener(
      'file-upload-success',
      this.handleSuccess
    );
    this.ctxProviderRef.nativeElement.addEventListener(
      'file-upload-failed',
      this.handleFailure
    );
  }
  handleChangeEvent = (e: UC.EventMap['change']) => {
    console.log('change event payload:', e);

    this.files = e.detail.allEntries.filter((f) => f.status === 'success');
  };

  handleModalCloseEvent = () => {
    console.log(this.files);
    this.handleCloseModal.emit(this.files);
  };
  handleSuccess = (e: UC.EventMap['file-upload-success']) => {
    this.toastSrv.showSuccess('Upload Successful');
  };
  handleFailure = (e: UC.EventMap['file-upload-failed']) => {
    this.toastSrv.showError('Upload Failed');
  };
}
