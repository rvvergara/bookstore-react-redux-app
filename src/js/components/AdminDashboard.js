import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import SearchWrapper from './SearchWrapper';
import UserList from './UserList';
import { listSearchResults } from '../actions/search';

export const AdminDashboard = ({ listSearchResults }) => {
  useEffect(() => () => listSearchResults([]), [listSearchResults]);
  return (
    <Tabs>
      <TabList>
        <Tab>Manage Books</Tab>
        <Tab>Manage Users</Tab>
      </TabList>
      <TabPanel>
        <SearchWrapper />
      </TabPanel>
      <TabPanel>
        <UserList />
      </TabPanel>
    </Tabs>
  );
};

export default connect(null, { listSearchResults })(AdminDashboard);
