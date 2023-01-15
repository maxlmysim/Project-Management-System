export type Welcome = {
  main: string;
  hello: string;
  question: string;
  introduction: string;
  technology: string;
  team: string;
  teammate: {
    'Maksim Lapko': string;
    'Vlad Belyaev': string;
    developer: string;
    teamlead: string;
  };
  advantages: {
    simple: string;
    personal: string;
    creatable: string;
    addable: string;
    editable: string;
    searchable: string;
  };
};

export type Profile = {
  title: string;
  name: string;
  login: string;
  delete: string;
  tasks: string;
};

export type Auth = {
  signOut: string;
  signIn: string;
  signUp: string;
};

export type Actions = {
  edit: string;
  delete: string;
  info: string;
  close: string;
  confirm: string;
  done: string;
  restore: string;
};

export type Alert = {
  delete: {
    board: string;
    column: string;
    task: string;
    user: string;
    error: string;
  };
  edit: {
    board: string;
    column: string;
    task: string;
    user: string;
    error: string;
  };
  add: {
    board: string;
    column: string;
    task: string;
    error: string;
  };
  done: {
    task: {
      done: string;
      notDone: string;
    };
  };
  sign: {
    up: string;
    in: string;
  };
};

export type ModalTitle = {
  editLogin: string;
  editName: string;
  deleteUser: string;
  deleteBoard: string;
  editBoard: string;
  addNewBoard: string;
  addNewColumn: string;
  board: string;
  deleteColumn: string;
  column: string;
  editColumn: string;
  task: string;
  addNewTask: string;
  deleteTask: string;
  editTask: string;
  setTaskDone: string;
  setTaskNotDone: string;
};

export type Fields = {
  name: {
    label: string;
    placeholder: string;
  };
  login: {
    label: string;
    placeholder: string;
  };
  password: {
    label: string;
    placeholder: string;
  };
  board: {
    label: string;
    placeholder: string;
    title: string;
    add: string;
    description: {
      label: string;
      placeholder: string;
    };
  };
  column: {
    label: string;
    placeholder: string;
    title: string;
    add: string;
  };
  task: {
    label: string;
    title: string;
    add: string;
    placeholder: string;
    description: {
      label: string;
      placeholder: string;
    };
  };
  message: {
    require: string;
    min2: string;
    min4: string;
    max20: string;
    max30: string;
    max50: string;
    max100: string;
  };
};
