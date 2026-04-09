import { computed, Injectable, signal } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseItem} from '../components/expense-item/expense-item';

@Injectable({
  providedIn: 'root',
})

export class ExpenseService {

   expenses = signal<Expense[]>([]); //signal used for reactive updates
   expenseCount =  computed(() => this.expenses().length)

   addExpense(title: string, amount: number, category: 'Work' | 'Personal' | 'Grocery') {
    const newExpense: Expense = {
      id: this.generateExpenseId(),
      title,
      amount,
      category,
  };
  this.expenses.update(expenses => [...expenses, newExpense]);
}

  //  deleteExpense(expenseId: string){
  //   this.expenses.update((expenses) => expenses.filter((ex)))
  //  }

  //private method to generate task id
  private generateExpenseId = () => {
  return 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
};
}
