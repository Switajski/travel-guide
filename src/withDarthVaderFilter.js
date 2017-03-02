import React from 'react';
import styled from 'styled-components';

const Dead = styled.div`
background:pink`;

const Alive = styled.div`
background:black`;

export default (Component, killedPopulation, totalPopulation) => {
    return (props) => {
        if (killedPopulation <= totalPopulation)
            return (
            <Alive>
                killed {killedPopulation} out of {totalPopulation}
                <Component {...props} />
            </Alive>)
        const disabled = (
            <Dead>
                <Component {...props} />
            </Dead>)
        return disabled;
    }
}