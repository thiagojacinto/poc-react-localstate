import './App.css';

import AddTask from './components/AddTask.js';
import AddUser from './components/AddUser.js';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './hooks/TaskContext.js';
import { UserProvider } from './hooks/UserContext.js';

export default function App() {
  return (
    <UserProvider>
      <TasksProvider>
        <h1>Tasks</h1>
        <AddUser />
        <h2>Day off in Kyoto</h2>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </UserProvider>
  );
}