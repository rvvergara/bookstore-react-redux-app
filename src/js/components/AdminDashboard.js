import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';

const AdminDashboard = () => (
  <Tabs>
    <TabList>
      <Tab>Manage Users</Tab>
      <Tab>Manage Books</Tab>
    </TabList>
    <TabPanel>
      <h2>Users</h2>
    </TabPanel>
    <TabPanel>
      <h2>Books</h2>
    </TabPanel>
  </Tabs>
);

export default AdminDashboard;
