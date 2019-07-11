import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';
import UserList from './UserList';

const AdminDashboard = () => (
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

export default AdminDashboard;
