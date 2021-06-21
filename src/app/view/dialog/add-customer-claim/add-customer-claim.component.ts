import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contract } from 'src/app/model/Contract';
import jwt_decode from 'jwt-decode';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { Request } from 'src/app/model/Request';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { CommonService } from 'src/app/services/common/common.service';
import { ContractrequestService } from 'src/app/services/contractRequest/contractrequest.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-customer-claim',
  templateUrl: './add-customer-claim.component.html',
  styleUrls: ['./add-customer-claim.component.css']
})
export class AddCustomerClaimComponent implements OnInit {
  fileName = '';
  result = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

//   onFileSelected(event) {

//     const file:File = event.target.files[0];

//     if (file) {

//         this.fileName = file.name;

//         const formData = new FormData();

//         formData.append("thumbnail", file);

//         const upload$ = this.http.post("/api/thumbnail-upload", formData);

//         upload$.subscribe();
//     }
// }

save(event:any): void{
  var selectFile = event.target.files;
  for(var i = 0; i < selectFile.length;i++){
    this.result += '<a href="'+selectFile.source+'">'+selectFile[i].name+'<a/>';
    this.result += '<br>';
  }

  }
  
}

