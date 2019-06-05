import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altfilters } from '../fixtures/filters';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
});


test('should render Expense List Filter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
test('should render Expense List Alt Filter correctly', () => {
    wrapper.setProps({ filters: altfilters });
    expect(wrapper).toMatchSnapshot();
});
test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by amount change', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});
test('should sort by date change', () => {
    const value = 'date';
    wrapper.setProps({ filters: altfilters });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});
test('should set start,end date', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find(DateRangePicker).props('onDatesChange').onDatesChange({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('should handle calendar focus change', () => {
    const value = 'endDate';
    wrapper.find(DateRangePicker).props('onFocusChange').onFocusChange(value);
    expect(wrapper.state('focused')).toBe(value);
});