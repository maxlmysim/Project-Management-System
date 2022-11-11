import { Container, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { ReactComponent as Logo } from '../../assets/logo/pma.svg';
import style from './WelcomePage.module.css';
import Advantage from '../../components/Advantage';
import Section from '../../components/Section';
import Technology from '../../components/Technology';
import Teammate from '../../components/Teammate';

export interface ITechnology {
  name: string;
  link: string;
  imgLink: string;
}

export interface ITeammate {
  name: string;
  role: string[];
  linkGit: string;
}

const WelcomePage: FC = () => {
  const advantage = [
    'Простой и интуитивно понятный интерфейс',
    'Персональный полностью редактируемый список проектов',
    'Возможность создавать неограниченное количестов стадий выполнения задач и самих задач',
    'Возможность добавлять/редактировать/удалять задачи, назначать команду исполнителей и ответственного',
    'Мгновенное изменение статусов задач и проектов для удобства взаимодействия между командой исполнителей',
    'Удобный поиск среди списка всех ваших проектов',
  ];
  const technologiesList: ITechnology[] = [
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
  const teamList: ITeammate[] = [
    {
      name: 'Maksim Lapko',
      role: ['FrontEnd developer', 'Teamlead'],
      linkGit: 'https://github.com/maxlmysim',
    },
    {
      name: 'Vlad Belyaev',
      role: ['FrontEnd developer'],
      linkGit: 'https://github.com/jocker-py',
    },
  ];

  return (
    <main>
      <Section>
        <Container>
          <div className={style.sectionContainer}>
            <Logo className={style.logo} />
            <Typography variant="h3" sx={{ fontWeight: '700', marginBottom: '20px' }}>
              Ищите удобное приложение, в которым будет удобно управлять процессом постановки и
              выполнения задач?
            </Typography>
            <Typography component="p" variant="h4">
              Рады представить Вашему вниманию наше приложение PMA. С ним Вы можете лего управлять
              своим проектом, быть в курсе всех поставленных задач и контролировать ход их
              выполнения.
            </Typography>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            {advantage.map((text) => (
              <Grid item xs={6} sm={4} md={2} key={text}>
                <Advantage text={text} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: '700', marginBottom: '20px' }}>
            Данное приложение разработано с применением следующих технологий:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {technologiesList.map((technology) => (
              <Grid item key={technology.name} xs={6} sm={4} md={3}>
                <Technology technology={technology} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
      <Section>
        <Typography
          variant="h3"
          sx={{ fontWeight: '700', margin: '0 auto 20px', textAlign: 'center' }}
        >
          Наша команда:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {teamList.map((teammate) => (
            <Grid item key={teammate.name} xs={7} sm={4}>
              <Teammate teammate={teammate} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </main>
  );
};

export default WelcomePage;
