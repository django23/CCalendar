import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import CalendarView from './calendarview';


// App component - represents the whole app
export default CalendarApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <AppBar
        title="11 Month Universe Calendar"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      <CalendarView />
    </div>
  </MuiThemeProvider>
);

