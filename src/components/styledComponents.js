import styled from 'styled-components';


/**
 * 
 * General calc styles components
 */
export const CalcDev = styled.div`
    display:flex;
    justify-content:center;
    background: #525252;
    width:100%;
    height:100%;
`;

export const CalcContainer = styled.div`
    display:grid;
    grid-template-rows:1 1;
    gap:30px;
    margin:10px;
`;

export const CalcScreen = styled.div`
    background-color:#d8e2dc;
    height:100px;
    border-radius:10px;
`;

export const CalcButtons = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap:10px;
`;

export const Container = styled.div`
    width: 400px;
    height: 578px;
    background-color: #393E46;
    border-radius:10px;
`;
//---------------------------------------------------------------------------------------------------------------------

/**
 * Calculator buttons styled components
 *
 */

export const ContentButton = styled.button`
    border: 0;
    height: 50px;
    width:  75px;
    background: #F2A649;
    font-size:1.2em;
    border-radius: 50px;
`;