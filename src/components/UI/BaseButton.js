import styled from 'styled-components';


export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 1;
    padding: 0.75rem;
    color: #000000;
    font-weight: 700;
    background-color: transparent;
    border: 1px solid #FF9D01;
    border-radius: 15px;
    pointer-events: all;
    cursor: pointer;
    
    &:disabled {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.65;
    }
    
    &:hover,
    &:active {
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.50);
    }
`

export const FilledButton = styled(Button)`
    background-color: #FF9D01;
    border: none;
    color: #FFFFFF;
    padding: 20px 17px;
`