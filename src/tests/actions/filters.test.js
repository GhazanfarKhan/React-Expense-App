import { setTextFilter, setEndDate, setStartDate, sortByDate, sortByAmount } from '../../actions/filters';
import { SET_TEXT_FILTER, SET_END_DATE, SET_START_DATE, SORT_BY_AMOUNT, SORT_BY_DATE } from '../../constants/actionType';
import moment from 'moment';



test('should generate set start filter action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: SET_START_DATE,
        startDate: moment(0)
    });
});
test('should generate set end filter action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: SET_END_DATE,
        endDate: moment(0)
    });
});
test('should generate set text filter action object', () => {
    const text = 'Rent';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: SET_TEXT_FILTER,
        text
    });
});
test('should generate set sort by amount filter action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: SORT_BY_AMOUNT
    });
});
test('should generate set sort by date filter action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: SORT_BY_DATE
    });
});