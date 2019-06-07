import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_EXPENSE } from '../constants/actionType';
import database from '../firebase/firebase';
export const addExpense = (expense) => {
    return {
        type: ADD_EXPENSE,
        expense
    }
};

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const removeExpense = ({ id } = {}) => {
    return {
        type: REMOVE_EXPENSE,
        id
    }
};

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

export const editExpense = (id, updates) => {
    return {
        type: EDIT_EXPENSE,
        id,
        updates
    }
};
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};
export const setExpense = (expenses) => {
    return {
        type: SET_EXPENSE,
        expenses
    }
};

export const startSetExpense = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
            dispatch(setExpense(expenses));
        });
    };
};
