export const advantageList: string[] = [
  'simple',
  'personal',
  'creatable',
  'addable',
  'editable',
  'searchable',
];

export interface ITechnology {
  name: string;
  link: string;
  imgLink: string;
}

export const technologiesList: ITechnology[] = [
  {
    name: 'React',
    link: 'https://reactjs.org/',
    imgLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207',
  },
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    imgLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20210506173343',
  },
  {
    name: 'React Router',
    link: 'https://reactrouter.com/en/main',
    imgLink: 'https://reacttraining.com/images/logo-icon-512.png',
  },
  {
    name: 'React Redux',
    link: 'https://react-redux.js.org/',
    imgLink:
      'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
  },
  {
    name: 'Material UI',
    link: 'https://mui.com/',
    imgLink: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  },
  {
    name: 'I18next',
    link: 'https://www.i18next.com/',
    imgLink:
      'https://1143667985-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media',
  },
  {
    name: 'React Hook Form',
    link: 'https://react-hook-form.com/',
    imgLink:
      'https://images.velog.io/images/rjsdnql123/post/efeffb05-ffea-4592-a238-a7e3905d28b1/logo.png',
  },
];

export interface ITeammate {
  name: string;
  roles: string[];
  linkGit: string;
}

export const teamList: ITeammate[] = [
  {
    name: 'Maksim Lapko',
    roles: ['developer', 'teamlead'],
    linkGit: 'https://github.com/maxlmysim',
  },
  {
    name: 'Vlad Belyaev',
    roles: ['developer'],
    linkGit: 'https://github.com/jocker-py',
  },
];
