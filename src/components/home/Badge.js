import styled from 'styled-components';

const Badge = styled.span`
    border-radius: 15px;
    border: 1px solid #FF9D01;
    color: #5E5E5E;
    text-align: center;
    padding: 8px 20px;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
    
    &:hover {
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.50);
    }
`
    
export default Badge;