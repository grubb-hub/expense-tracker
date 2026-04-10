import { computed, Injectable, signal } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseItem} from '../components/expense-item/expense-item';
import { ExpenseCategory } from '../models/expense';

@Injectable({
  providedIn: 'root',
})

export class ExpenseService {

   expenses = signal<Expense[]>([]); //signal used for reactive updates
   expenseCount =  computed(() => this.expenses().length)

    catagories = signal<ExpenseCategory[]>([
    'Work',
    'Personal',
    'Grocery',
    'Utilities',
    'Shopping',
    'Travel',
    'Food',

   ])

   addExpense(title: string, amount: number, category: ExpenseCategory) {
    const newExpense: Expense = {
    id: this.generateExpenseId(),
    title,
    amount,
    category,
  };
  this.expenses.update(expenses => [...expenses, newExpense]);
}

   deleteExpense(expenseId: string){
    this.expenses.update((expenses) => expenses.filter((expense) => expense.id != expenseId))
   }

  //private method to generate task id
  private generateExpenseId = () => {
  return 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
};

  totalExpenses = computed(() => this.expenses().reduce((sum, e) => sum + e.amount, 0));

  highestExpense = computed(() => this.expenses().reduce((max,e) => e.amount > max ? e.amount : max, 0) );

  averageExpense = computed(() => this.expenses().length === 0 ? 0 : this.totalExpenses() / this.expenses().length);
}
