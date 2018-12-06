import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { debounce } from 'lodash';

import { Result } from './Result';
import { findCities } from './search';
import { FuzzyMatchData } from '../src';

const Holder = styled.div`
  font-family: Helvetica Neue, sans-serif;
  max-width: 600px;
  margin: 100px auto;
  padding: 20px;

  &,
  & * {
    box-sizing: border-box;
  }
`;

const IntroHolder = styled.div`
  padding: 20px 0;
  font-weight: bold;
  opacity: 0.2;
  font-family: inherit;
`;
const SearchFormHolder = styled.div``;
const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 25px;
  font: inherit;
  font-weight: bold;
  font-size: 30px;
  border: 2px solid #ddd;
  outline: none;

  &:focus {
    border-color: #bbb;
  }
`;

const ResultsHolder = styled.div``;

interface State {
  results: FuzzyMatchData[];
}

class Demo extends Component<{}, State> {
  state: State = {
    results: [],
  };

  componentWillUnmount() {
    this.search.cancel();
  }

  search = debounce(
    (term: string) => {
      if (!term) {
        this.setState({ results: [] });
      }
      const results = findCities(term);
      this.setState({ results });
    },
    50,
    { leading: true, trailing: true },
  );

  render() {
    const { results } = this.state;
    return (
      <Holder>
        <SearchFormHolder>
          <SearchInput
            placeholder="Search for city..."
            onChange={(event) => this.search(event.target.value)}
          />
          <IntroHolder>
            List of cities includes 5900 largest USA cities
          </IntroHolder>
        </SearchFormHolder>
        <ResultsHolder>
          {results.slice(0, 20).map((result, index) => {
            return <Result key={index} match={result} />;
          })}
        </ResultsHolder>
      </Holder>
    );
  }
}

render(<Demo />, document.getElementById('app'));
