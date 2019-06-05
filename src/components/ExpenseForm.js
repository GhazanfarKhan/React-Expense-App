import React from "react";
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';



class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ''
        }
    }

    onDesciptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description });
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({ note });
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount });
        }
    }
    onCreatedAtChange = (createdAt) => {
        if (createdAt) {
            this.setState({ createdAt });
        }
    }
    onFocusChange = ({ focused }) => {
        debugger;
        this.setState({ focused });
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState({
                error: 'Please provide description and amount'
            })
        }
        else {
            this.setState({
                error: ''
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: moment(this.state.createdAt).valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDesciptionChange}

                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onCreatedAtChange}
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={this.onFocusChange}
                        id="createdAt"
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button
                    >{this.props.expense ? 'Edit' : 'Add'} Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;