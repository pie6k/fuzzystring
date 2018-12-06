import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import { FuzzyMatchData, MatchRoleType } from '../src';

interface Props {
  match: FuzzyMatchData;
}

const Holder = styled.div`
  display: flex;
  font-size: 20px;
  align-items: baseline;
  padding: 10px 0;
`;

interface PartProps {
  type: MatchRoleType;
}

const ResultPart = styled.div`
  line-height: 1.5;
  font-size: 20px;
  white-space: pre;
  font-weight: ${(props: PartProps) => (props.type === 'input' ? 800 : 500)};
  opacity: ${(props: PartProps) => (props.type === 'suggestion' ? 0.6 : 1)};
  transition: 0.33s opacity;
`;

export function Result({ match }: Props) {
  return (
    <Holder>
      {match.parts.map((part, index) => {
        return (
          <ResultPart key={index} type={part.type}>
            {part.content}
          </ResultPart>
        );
      })}
    </Holder>
  );
}
