import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanApiSummary } from './loan-amor.model';
import { LoanPaymentSchedule } from './loan-amor.model';
import { LoanApiService } from '../loan-api.service';


@Component({
  selector: 'app-loan-amorization-form',
  templateUrl: './loan-amorization-form-component.html',
  styleUrls: []
})

// API DOC: https://www.commercialloandirect.com/amortization-schedule-api.html

export class LoanAmorizationFormComponent implements OnInit {

  constructor(private http: HttpClient, private loanApiService: LoanApiService) { }

  ngOnInit(): void {
  }

  loanScheduleData: LoanPaymentSchedule[] = [];
  loanSummaryData: LoanApiSummary[] = [];
  loanCompiledData: Object;
  loanTotalInterest = 0;

  // disable form submit if required fields are blank


// Fetch data from API w/ form values
  onSubmit(form: NgForm) {
    // Destructure inputted form values
    const { loanAmount, interestRate, loanAmort, loanOriginationDate, interestOnlyPeriod, paymentFreq, compoundFreq } = form.value
    // Send HTTP GET Request to the API
    this.http.get(`https://www.commercialloandirect.com/monthlyPaymentAPI.php?
      pv=${loanAmount}
      &rate=${interestRate}
      &nperiod=${loanAmort}
      &io=${interestOnlyPeriod}
      &pf=${paymentFreq}
      &cf=${compoundFreq}
      &pt=0&mode=json`
    )
      .subscribe((apiResponse => {
        // this.loanSummaryData = this.loanApiService.saveLoanApiSummaryData(apiResponse)
        // this.loanScheduleData = this.loanApiService.saveLoanApiScheduleData(apiResponse);
        // this.loanTotalInterest = this.loanApiService.calculateTotalInterest(apiResponse);
        this.loanCompiledData = this.loanApiService.saveLoanData(apiResponse)
      }
      ));

    // Find Age of Loan
    const formDate = new Date(form.value.loanOriginationDate);
    const currentDate = new Date();
    const difference = (currentDate.getTime() - formDate.getTime()) / (1000 * 60 * 60 * 24)
    console.log('time differnce', difference)
    // const date difference =
    // const date = new Date()
    // console.log('new Date() form date', new Date(form.value.loanOriginationDate))
    // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // console.log('date', days)

    // get difference in time of dates (in years)


    // find total interest to date based off of interest schedule ( total interest of array up to that year)

  }

  calculateLoanAge(inputDate) {
    // form format = 2022-05-04
  }

}
