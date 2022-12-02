import { Container, Grid, styled, Typography } from '@mui/material';
import React, { FC } from 'react';
import { ReactComponent as Logo } from '../assets/logo/pma.svg';
import Advantage from '../components/Advantage';
import Section from '../components/Section';
import Technology from '../components/Technology';
import Teammate from '../components/Teammate';
import { advantageList, teamList, technologiesList } from '../constants/welcomePageInfo';
import { authSelector } from '../store/authSlice';
import { useAppSelector } from '../hooks/storeHooks';

const SectionContainer = styled('div')`
  display: grid;
  gap: 15px;
  grid-template-columns: 25% 75%;

  svg {
    grid-area: 1/1/4/2;
    fill: #1976d2;
  }
`;

const WelcomePage: FC = () => {
  const { isLogin, name } = useAppSelector(authSelector);
  return (
    <main>
      <Section>
        <Container>
          <SectionContainer>
            <Logo />
            <Typography variant="h3" sx={{ fontWeight: '700', marginBottom: '20px' }}>
              {isLogin
                ? `Приветствуем вас, ${name}!`
                : 'Ищите удобное приложение, в которым будет удобно управлять процессом постановки ивыполнения задач?'}
            </Typography>
            <Typography component="p" variant="h4">
              Рады представить Вашему вниманию наше приложение PMA. С ним Вы можете лего управлять
              своим проектом, быть в курсе всех поставленных задач и контролировать ход их
              выполнения.
            </Typography>
          </SectionContainer>
        </Container>
      </Section>
      <Section>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            {advantageList.map((text) => (
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
