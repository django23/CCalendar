import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import Calendar from './calendar';
// App component - represents the whole app


const years = [];
for (let i = 1867; i < 2023; i++) {
  years.push(<MenuItem value={i} key={i} primaryText={i}/>);
}

const months = [];
for (let i = 1; i < 12; i++) {
  months.push(<MenuItem value={i} key={i} primaryText={`Month # ${i}`}/>);
}


export default class CalendarView extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      year: 2014,
      month: 3
    };
    this.handleMonthChange = (event, index, value) => this.setState({month: value});
    this.handleYearChange = (event, index, value) => this.setState({year: value});
  }

  render() {
    return (
      <Paper>
        <div className="row" style={{padding:20}}>
          <div>
            <SelectField
              value={this.state.month}
              floatingLabelText="Select Month"
              onChange={this.handleMonthChange}>
              {months}
            </SelectField>
          </div>
          <div>
            <SelectField
              value={this.state.year}
              floatingLabelText="Select Year"
              onChange={this.handleYearChange}>
              {years}
            </SelectField>
          </div>
        </div>
        <div className="row">
          <Calendar month={this.state.month} year={this.state.year}/>
        </div>
      </Paper>
    );
  }
}

