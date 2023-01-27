import React, { FC, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { alertSelector, closeAlert } from '../../store/alertSlice';
import Notification from './Notification';
import { Link, styled } from '@mui/material';
import { teamList } from '../../constants/welcomePageInfo';

const GitHubIconStyle = {
  fontSize: '2rem',
};

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: black;

  &:hover {
    color: inherit;
    text-shadow: 2px 2px 3px black;
  }

  img {
    width: 60%;
    height: auto;
    margin: 0 auto 2.5rem;
  }
`;

const FooterContainer = styled('footer')`
  position: relative;
  background: #1976d2;
  color: #000428;
  margin-top: auto;
  font-size: 2rem;
`;

const ItemContainer = styled('div')`
  height: 5rem;
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer: FC = () => {
  const dispatch = useAppDispatch();
  const { isShow, timeout, content } = useAppSelector(alertSelector);
  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => dispatch(closeAlert()), timeout);
      return () => clearTimeout(timer);
    }
  }, [isShow]);
  return (
    <FooterContainer>
      <ItemContainer>
        {[...teamList].reverse().map((team) => (
          <LinkStyled key={team.name} target="_blank" href={team.linkGit}>
            {team.username} <GitHubIcon sx={GitHubIconStyle} />
          </LinkStyled>
        ))}
        <div>© 2022</div>
      </ItemContainer>
      {isShow && <Notification isShow={isShow} content={content} />}
    </FooterContainer>
  );
};

export default Footer;
