import React from 'react';
import {CDate, daysOfWeek} from './lib/ccalendar.js';

const headerDaysOfWeek = () => {
  return daysOfWeek.map((day, idx) => (
    <th key={idx}>{day}</th>
  ));
};

const calendarBody = (month, year) => {
    const firstDay = new CDate(1, month, year);
    const shift = firstDay.dayOfWeek;
    const endCell = Math.ceil((shift + firstDay.monthLength) / 7) * 7;
    const body = [];
    let cellContains;
    let rowNumber = 0;
    let weekRow = [];
    for (let idx = 0; idx < endCell; idx++) {
      if (idx && idx % 7 === 0) {
        body.push(
          <tr key={rowNumber}>
            {weekRow}
          </tr>
        );
        weekRow = [];
        rowNumber++;
      }
      const day = idx - shift;
      let cellText;
      if (day < 0 || day > firstDay.monthLength)
        cellText = '';
      else {
        cellText =  ` ${day+1}.${month}`;
      }
      weekRow.push(
        <td key={day}>
          {cellText}
        </td>
      );
    }
    body.push(
      <tr key={rowNumber}>
        {weekRow}
      </tr>
    );
    return (
      <tbody>
      {body}
      </tbody>
    );
  }
  ;


export default Calendar = ({month, year}) => (
  <div style={{padding: 20}}>
    <table>
      <thead>
      <tr>
        {headerDaysOfWeek()}
      </tr>
      </thead>

      {calendarBody(month, year)}

    </table>
  </div>
);
