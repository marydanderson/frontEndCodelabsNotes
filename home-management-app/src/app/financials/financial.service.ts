import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { CompiledLoanDataObject } from './loan-amortization/loan-amor.model';
import { LoanApiService } from './loan-api.service';



@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  financialCollection: AngularFirestoreCollection<CompiledLoanDataObject>;
  financials: Observable<CompiledLoanDataObject[]>;

  constructor(private afs: AngularFirestore, private authservice: AuthService, private loanApiSevice: LoanApiService) { }



}
