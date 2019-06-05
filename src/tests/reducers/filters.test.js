import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import { SORT_BY_AMOUNT, SORT_BY_DATE, SET_TEXT_FILTER, SET_START_DATE, SET_END_DATE } from '../../constants/actionType';
test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: SORT_BY_AMOUNT });
    expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
    const current = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: SORT_BY_DATE };
    const state = filtersReducer(current, action);
    expect(state.sortBy).toEqual('date');
});

test('should set text filter text', () => {
    const action = { type: SET_TEXT_FILTER, text: 'Rent' };
    const state = filtersReducer(undefined, action);
    expect(state.text).toEqual('Rent');
});
test('should set start date filter value', () => {
    const action = { type: SET_START_DATE, startDate: moment(0).valueOf() };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0).valueOf());
});
test('should set end date filter value', () => {
    const action = { type: SET_END_DATE, endDate: moment(0).valueOf() };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0).valueOf());
});