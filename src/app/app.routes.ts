import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { AddExpense } from './components/add-expense/add-expense';
import { EditExpense } from './components/edit-expense/edit-expense';
import { ExpenseItem } from './components/expense-item/expense-item';
import { ExpenseList } from './components/expense-list/expense-list';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard,
        title: 'Dashboard'
    },
    {
        path: 'add',
        component: AddExpense,
        title: 'AddExpense'
    },
    {
        path: 'expenses',
        component: ExpenseList,
        title: 'ExpenseList'
    },
    {
        path: 'edit',
        component: EditExpense,
        title: 'editExpense'
    }
];
