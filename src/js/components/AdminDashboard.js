import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';
import UserList from './UserList';
import { listSearchResults } from '../actions/search';

export const AdminDashboard = ({ listSearchResults }) => {
  useEffect(() => () => listSearchResults([]), [listSearchResults]);
  return (
    <Tabs>
      <TabList>
        <Tab>Manage Users</Tab>
        <Tab>Manage Books</Tab>
      </TabList>
      <TabPanel>
        <UserList />
      </TabPanel>
      <TabPanel>
        <SearchForm />
        <SearchResultsList />
      </TabPanel>
    </Tabs>
  );
};

export default connect(null, { listSearchResults })(AdminDashboard);
