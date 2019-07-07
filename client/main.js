import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import { AppRouter, history } from '../imports/routes/AppRouter';
import '../imports/startup/simple-schema-config.js';

Meteor.startup(() => {
  ReactDOM.render(<AppRouter/>, document.getElementById('app'));
});
