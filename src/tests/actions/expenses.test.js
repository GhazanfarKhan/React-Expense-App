import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { REMOVE_EXPENSE, EDIT_EXPENSE, ADD_EXPENSE } from '../../constants/actionType';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: REMOVE_EXPENSE,
        id: '123abc'
    });
});


test('it should edit expense action object', () => {
    const action = editExpense('abc123', { note: 'aaa' });
    expect(action).toEqual({
        type: EDIT_EXPENSE,
        id: 'abc123',
        updates: {
            note: 'aaa'
        }
    });
});

test('should setup add expense action object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: ADD_EXPENSE,
        expense: expenses[2]
    });
});

test('should add expense object to database and store', (done) => {
    jest.setTimeout(30000);
    const store = createMockStore({});
    const expenseData = {
        description: 'water',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: ADD_EXPENSE,
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense default object to database and store', (done) => {
    jest.setTimeout(30000);
    const store = createMockStore({});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense(expenseDefault)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: ADD_EXPENSE,
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});
