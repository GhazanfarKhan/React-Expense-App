import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilters extends React.Component {
    state = {
        focused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    render() {
        return (
            <div>
                <input type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    console.log(e.target.value)
                    if (e.target.value === 'amount')
                        this.props.dispatch(sortByAmount())
                    else if (e.target.value === 'date')
                        this.props.dispatch(sortByDate())
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="startDate"
                    endDate={this.props.filters.endDate}
                    endDateId="endDate"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focused}
                    onFocusChange={focused => this.setState({ focused })}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseListFilters);