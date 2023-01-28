import React, { FC } from 'react';
import { Button, styled } from '@mui/material';

const SectionContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  color: white;
  animation: colorSlide 15s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;

  .title-box {
    text-align: center;
  }
  .title,
  .subtitle {
    margin: 10px;
    cursor: default;
    animation: faidIn 2s ease infinite;
  }

  .title {
    font-size: 8em;
    border-bottom: 1px dashed white;
  }

  .digit1 {
    animation: fadeIn 2s ease infinite;
    animation-delay: 200ms;
  }
  .digit2 {
    animation: fadeIn 2s ease infinite;
    animation-delay: 300ms;
  }
  .digit3 {
    animation: fadeIn 2s ease infinite;
    animation-delay: 400ms;
  }

  @keyframes colorSlide {
    0% {
      background-color: #152a68;
    }
    25% {
      background-color: royalblue;
    }
    50% {
      background-color: seagreen;
    }
    75% {
      background-color: tomato;
    }
    100% {
      background-color: #152a68;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const NotFound: FC = () => {
  return (
    <SectionContainer data-testid="not-found-page">
      <div className="titleBox">
        <h1 className="title">
          <span className="digit1" id="digit1">
            4
          </span>
          <span className="digit2" id="digit2">
            0
          </span>
          <span className="digit3" id="digit3">
            4
          </span>
        </h1>
        <h3 className="subtitle">PAGE NOT FOUND</h3>
      </div>
      <Button>Return To Home</Button>
    </SectionContainer>
  );
};

export default NotFound;
