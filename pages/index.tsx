import React from "react";
import { MantineProvider } from '@mantine/core';
import AppShell from "@/components/appshell/appshell";
const Dashboard = ({children}) => {
  return (
      <MantineProvider>
       <AppShell children={children}>
           <h1>Hello</h1>
       </AppShell>
      </MantineProvider>
  );
};

export default Dashboard;
