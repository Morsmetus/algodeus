import React from 'react';
import styled from 'styled-components';
import Astronaut from 'components/Icons/Astronaut';

const StyledVisualizer = styled.div`
    background: ${(props) => props.theme.colors.backgroundGray};
    flex: 1;
    min-height: 100px;
    padding: 8px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
    display: flex;
    flex-wrap: wrap;
`;

const StyledItem = styled.div`
    margin-right: 48px;
    width: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const Title = styled.div`
    background: black;
    color: white;
    text-align: center;
    border-radius: 8px;
    border: 1px solid white;
    width: 100%;
    overflow: hidden;
    padding: 0 8px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    height: 22px;
`;

const Counter = styled.div`
    background: ${(props) => props.theme.colors.danger};
    background: #f44336;
    color: white;
    width: 12px;
    height: 15px;
    border-radius: 5px;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
`;

const StyledIcon = styled.div`
    width: 50px;
    height: 50px;
    margin-bottom: 8px;
`;

const Visualizer = ({ items }) => {
    return (
        <StyledVisualizer>
            {items
                ? items.map((item, index) => {
                      return (
                          <StyledItem key={index}>
                              <Counter>{index}</Counter>
                              <StyledIcon key={index}>
                                  <Astronaut />
                              </StyledIcon>
                              <Title>{item}</Title>
                          </StyledItem>
                      );
                  })
                : 'No items'}
        </StyledVisualizer>
    );
};

export default Visualizer;
