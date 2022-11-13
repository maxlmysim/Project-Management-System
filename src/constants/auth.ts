export interface IAuthFieldProps {
  label: string;
  name: 'login' | 'password' | 'name';
  placeholder: string;
  type: string;
  registerOptions: IRegisterOptions;
}

interface IRegisterOptions {
  required?: {
    value: boolean;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
}

export const signInFieldList: IAuthFieldProps[] = [
  {
    label: 'Логин',
    name: 'login',
    type: 'text',
    placeholder: 'Введите ваш логин',
    registerOptions: {
      required: {
        value: true,
        message: 'Это поле обязательно!',
      },
      minLength: {
        value: 4,
        message: 'Длинна логина должна быть больше 3 символов',
      },
    },
  },
  {
    label: 'Пароль',
    name: 'password',
    registerOptions: {
      required: {
        value: true,
        message: 'Это поле обязательно!',
      },
      minLength: {
        value: 8,
        message: 'Длинна пароля должна быть 8 символов или более ',
      },
    },
    type: 'password',
    placeholder: 'Введите ваш пароль',
  },
];

export const registrationFieldList: IAuthFieldProps[] = [
  {
    label: 'Имя',
    name: 'name',
    type: 'text',
    placeholder: 'Введите ваше имя',
    registerOptions: {
      required: {
        value: true,
        message: 'Это поле обязательно!',
      },
      minLength: {
        value: 4,
        message: 'Длинна имени должна быть больше 3 символов',
      },
    },
  },
  {
    label: 'Логин',
    name: 'login',
    type: 'text',
    placeholder: 'Введите ваш логин',
    registerOptions: {
      required: {
        value: true,
        message: 'Это поле обязательно!',
      },
      minLength: {
        value: 4,
        message: 'Длинна логина должна быть больше 3 символов',
      },
    },
  },
  {
    label: 'Пароль',
    name: 'password',
    type: 'password',
    placeholder: 'Введите ваш пароль',
    registerOptions: {
      required: {
        value: true,
        message: 'Это поле обязательно!',
      },
      minLength: {
        value: 8,
        message: 'Длинна пароля должна быть 8 символов или более ',
      },
    },
  },
];
