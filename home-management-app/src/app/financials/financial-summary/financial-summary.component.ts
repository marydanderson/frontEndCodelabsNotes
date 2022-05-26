import { Component, OnInit } from '@angular/core';
import { LoanApiService } from '../loan-api.service';

@Component({
  selector: 'app-financial-summary',
  templateUrl: './financial-summary.component.html',
  styleUrls: ['./financial-summary.component.css']
})
export class FinancialSummaryComponent implements OnInit {

  constructor(private loanService: LoanApiService) { }

  ngOnInit(): void {
    this.loanService.getLoanData();
  }

  loanAmount = this.loanService.getLoanData
  hoverText = false;

}
