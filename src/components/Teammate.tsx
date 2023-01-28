import { Link, styled, Typography } from '@mui/material';
import React, { FC } from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import { ITeammate } from 'constants/welcomePageInfo';
import { useTranslation } from 'react-i18next';

const LinkStyle = styled(Link)`
  display: grid;
  grid-template-columns: 25% 75%;
  gap: 1.5rem;
  align-items: center;
  justify-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  height: 100%;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid rgb(25, 118, 210);

    h4 {
      color: rgb(25, 118, 210);
    }
  }

  svg {
    width: 100%;
    height: auto;
    grid-row: 1/3;
    grid-column: 1/2;
  }

  h4,
  h5 {
    color: black;
    font-weight: 500;
    text-align: center;
  }
`;

const Teammate: FC<{ teammate: ITeammate }> = ({ teammate }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'welcome.teammate' });
  const { name, roles, linkGit } = teammate;
  return (
    <LinkStyle href={linkGit} target="_blank">
      <GroupsIcon />
      <Typography variant="h4" component="h4">
        {t(name)}
      </Typography>
      <Typography variant="h5" component="h5">
        {roles.map((role) => t(role)).join(', ')}
      </Typography>
    </LinkStyle>
  );
};

export default Teammate;
