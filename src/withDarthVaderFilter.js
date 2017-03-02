import React from 'react';
import styled from 'styled-components';

const Dead = styled.div`
background:red;`;

const Alive = styled.div`
background:green;`;

const Small = styled.p`
font-size: 0.1 px`

export default (Component, killedPopulation, totalPopulation) => {
    return (props) => {
        if (killedPopulation <= totalPopulation)
            return (
            <Alive>
                <Small> killed {killedPopulation} / {totalPopulation} </Small>
                <Component {...props} />
            </Alive>)
        const disabled = (
            <Dead>
                <Component {...props} />
            </Dead>)
        return disabled;
    }
}