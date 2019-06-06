import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { REMOVE_EXPENSE, ADD_EXPENSE, EDIT_EXPENSE, SET_EXPENSE } from '../../constants/actionType';

test('should setup default expense values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = { type: REMOVE_EXPENSE, id: expenses[1].id };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if id not found', () => {
    const action = { type: REMOVE_EXPENSE, id: -1 };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Laptop',
        note: '',
        amount: 188,
        createdAt: 0
    };
    const action = { type: ADD_EXPENSE, expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 1808;
    const action = {
        type: EDIT_EXPENSE,
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if no id found', () => {
    const amount = 1808;
    const action = {
        type: EDIT_EXPENSE,
        id: -1,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
test('should set expenses', () => {
    const action = {
        type: SET_EXPENSE,
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});