import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpense,
    startSetExpense,
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses';
import {
    REMOVE_EXPENSE,
    EDIT_EXPENSE,
    ADD_EXPENSE,
    SET_EXPENSE
} from '../../constants/actionType';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = "thisismytestuid";
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
    jest.setTimeout(30000);
    const expenseData = {};
    expenses.forEach(({ id, description, amount, createdAt, note }) => {
        expenseData[id] = {
            description,
            amount,
            createdAt,
            note
        };
    });
    database.ref(`users/${uid}/expenses`).set(expenseData).then(() => {
        done();
    });
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: REMOVE_EXPENSE,
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: REMOVE_EXPENSE,
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
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
test('it should edit expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 2145 };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: EDIT_EXPENSE,
            id: expect.any(String),
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
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
    const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense default object to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});
test('should setup set expense action object with data', () => {
    const action = setExpense(expenses);
    expect(action).toEqual({
        type: SET_EXPENSE,
        expenses
    });
});

test('should start set expense', () => {
    const action = setExpense(expenses);
    expect(action).toEqual({
        type: SET_EXPENSE,
        expenses
    });
});

test('should fetch the expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: SET_EXPENSE,
            expenses
        });
        done();
    });
});