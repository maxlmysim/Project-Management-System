import {
  Actions,
  Alert,
  Auth,
  Fields,
  ModalTitle,
  Profile,
  Welcome,
} from '../types/translationTypes';

export const welcomeEN: Welcome = {
  main: 'Main',
  hello: 'You are welcome, ',
  question:
    'Are you looking for a convenient application that will be convenient to manage the process of setting and completing tasks?',
  introduction:
    'We are glad to present to your attention our application PMA. ' +
    'With it, you can easily manage your project, be aware of all the tasks and control the progress of their implementation.',
  technology: 'This application is developed using the following technologies:',
  team: 'Our team:',
  teammate: {
    'Maksim Lapko': 'Maksim Lapko',
    'Vlad Belyaev': 'Vlad Belyaev',
    developer: 'Front-End developer',
    teamlead: 'Teamlead',
  },
  advantages: {
    simple: 'Simple and intuitive interface',
    personal: 'Personal fully editable project list',
    creatable:
      'The ability to create an unlimited number of stages of task execution and the tasks themselves',
    addable:
      'Ability to add/edit/delete tasks, assign a team of performers and a responsible person',
    editable:
      'Instant change of the statuses of tasks and projects for the convenience of interaction between the team of performers',
    searchable: 'Convenient search among the list of all your projects',
  },
};

export const profileEN: Profile = {
  title: 'Profile',
  name: 'Name',
  login: 'Login',
  delete: 'Delete account',
  tasks: 'My tasks',
};

export const authEN: Auth = {
  signOut: 'Sign Out',
  signIn: 'Sign In',
  signUp: 'Sign Up',
};

export const actionsEN: Actions = {
  edit: 'Edit',
  delete: 'Delete',
  info: 'Info',
  close: 'Close',
  confirm: 'Confirm',
  done: 'Complete',
  restore: 'Restore',
};

export const alertEN: Alert = {
  delete: {
    board: 'Board deleted',
    column: 'Column deleted',
    task: 'Task deleted',
    user: 'User deleted',
    error: 'Delete failed',
  },
  edit: {
    board: 'Board edited',
    column: 'Column edited',
    task: 'Task edited',
    user: 'User edited',
    error: 'Edit failed',
  },
  add: {
    board: 'Board added',
    column: 'Column added',
    task: 'Task added',
    error: 'Add failed',
  },
  done: {
    task: {
      done: 'Task completed',
      notDone: 'Task restored',
    },
  },
  sign: {
    up: 'User created',
    in: 'User is authorized',
  },
};

export const modalTitleEN: ModalTitle = {
  editLogin: 'Edit login',
  editName: 'Edit name',
  deleteUser: 'Delete user?',
  deleteBoard: 'Delete board?',
  editBoard: 'Edit board',
  addNewBoard: 'Add new board',
  addNewColumn: 'Add new column',
  board: 'Board',
  deleteColumn: 'Delete column?',
  column: 'Column',
  editColumn: 'Edit column',
  task: 'Task',
  addNewTask: 'Add new task',
  deleteTask: 'Delete task?',
  editTask: 'Edit task',
  setTaskDone: 'Set task completed?',
  setTaskNotDone: 'Set task uncompleted?',
};

export const fieldsEN: Fields = {
  name: {
    label: 'Name',
    placeholder: 'Enter name',
  },
  login: {
    label: 'Login',
    placeholder: 'Enter login',
  },
  password: {
    label: 'Password',
    placeholder: 'Enter password',
  },
  board: {
    label: 'Board name',
    placeholder: 'Enter board name',
    title: 'Boards',
    add: 'Add board',
    description: {
      label: 'Board description',
      placeholder: 'Enter board description',
    },
  },
  column: {
    label: 'Column name',
    placeholder: 'Enter column name',
    title: 'Column',
    add: 'Add column',
  },
  task: {
    label: 'Task name',
    title: 'Task',
    add: 'Add task',
    placeholder: 'Enter task name',
    description: {
      label: 'Task description',
      placeholder: 'Enter task description',
    },
  },
  message: {
    require: 'This field is required!',
    min2: 'Min length 2 characters',
    min4: 'Min length 4 characters',
    max20: 'Max length 20 characters',
    max30: 'Max length 30 characters',
    max50: 'Max length 50 characters',
    max100: 'Max length 100 characters',
  },
};
