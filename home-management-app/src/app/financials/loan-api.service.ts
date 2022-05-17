import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompiledLoanDataObject, LoanApiSummary } from './loan-amortization/loan-amor.model';
import { LoanPaymentSchedule } from './loan-amortization/loan-amor.model';

@Injectable({
  providedIn: 'root'
})
export class LoanApiService {

constructor(private http: HttpClient) { }

// SAVE loan data from user input, then sent to API, calculated by API and sent back from API,
  saveLoanData(apiReturn) {
    const compiledLoanData = new CompiledLoanDataObject(
      this.saveLoanApiSummaryData(apiReturn),
      this.saveLoanApiScheduleData(apiReturn),
      this.calculateTotalInterest(apiReturn)
    )
    console.log('compiled data obj', compiledLoanData)
    // store on firebase
    this.http.post('https://house-management-91707-default-rtdb.firebaseio.com/financials/loan.json',
      compiledLoanData
    ).subscribe(responseData => {
      responseData
    })
    return compiledLoanData
  }

  private saveLoanApiSummaryData(apiReturn) {
    // -------Format Loan Summary API Return------------
      // Grab first item in API array = loan summary
      const apiLoanSummaryObj: Object = apiReturn[0]
      // Extract the values (the API keys are not retrievable, so manually assigning to newly created keys)
      const summaryValuesArray: number[] = Object.values(apiLoanSummaryObj);
      // store&create LoanPaymentSummary Obj from results | utilize in rest of the app
      const loanPaymentSummary = new LoanApiSummary (
        summaryValuesArray[0], // interest only payment
        summaryValuesArray[1], // principal + int payment
        summaryValuesArray[2], // number of payments
        summaryValuesArray[3], // periodic interest rate
        summaryValuesArray[4], // total payments
      )
    // console.log('stored summary obj', loanPaymentSummary)
    return loanPaymentSummary
  }

  private saveLoanApiScheduleData(apiReturn) {
    const formattedSchedule =  this.formatScheuleData(apiReturn)
    return formattedSchedule;
  }

  private calculateTotalInterest(apiReturn) {
    let data: LoanPaymentSchedule[] = this.formatScheuleData(apiReturn);
    let totalInterest = 0;
    data.forEach((paymentFreq) => {
      totalInterest += paymentFreq.intererstPaid;
      console.log(totalInterest)
    })
    return totalInterest;
  }

  private formatScheuleData(apiReturn) {
    // -------Format Loan Schedule API Return------------
    // Grab 2nd item in API array = array of loan schedule (in loan terms i.e. years)
      const apiScheduleArray: LoanPaymentSchedule[] = apiReturn[1]
      const finalScheduleArray: LoanPaymentSchedule[] = [];
      apiScheduleArray.forEach(data => {
      let scheduleValuesArray: number[] = Object.values(data);
      const retrievedScheduleValueItem = new LoanPaymentSchedule(
        scheduleValuesArray[0], // Year
        scheduleValuesArray[1], // Balance
        scheduleValuesArray[2], // Interest Paid
        scheduleValuesArray[3], // Principal
      )
      finalScheduleArray.push(retrievedScheduleValueItem)
    })
    console.log('formatted schedule', finalScheduleArray)
    return finalScheduleArray;
  }

}
