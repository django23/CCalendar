import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import CalendarApp from './imports/calendarapp.jsx';

Meteor.startup(() => {
  render(<CalendarApp />, document.getElementById('render-target'));
});