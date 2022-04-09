import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showIncome: boolean = false
  transactions: number[] = [100, -50, 300, -500, 900];
  incomeList: number[] = [100, 50, 400];
  expenseList: number[] = [100, 75];
  fundraisingGoal: number = 1300;
}
