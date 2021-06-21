import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Contract } from 'src/app/model/Contract';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { Illustration } from 'src/app/model/Illustration';
import { Referencetable } from 'src/app/model/Referencetable';
import { CommonService } from 'src/app/services/common/common.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';
import { RefertableService } from 'src/app/services/refertable/refertable.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private snackBar:SnackbarService,private referenceTable:RefertableService,private IllustrationService:IllustrationService,private contractService:ContractService,private common:CommonService,private customerService : CustomerService) { }

  ngOnInit(): void {
  }

}
