import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../constants/actionType';
import database from '../firebase/firebase';
export const addExpense = (expense) => {
    return {
        type: ADD_EXPENSE,
        expense
    }
};

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const removeExpense = ({ id }) => {
    return {
        type: REMOVE_EXPENSE,
        id
    }
}

export const editExpense = (id, updates) => {
    return {
        type: EDIT_EXPENSE,
        id,
        updates
    }
}