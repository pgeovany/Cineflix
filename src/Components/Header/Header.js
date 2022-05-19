import styled from "styled-components";

export default function Header() {
    return (
        <Logo>
            <h1>CINEFLEX</h1>
        </Logo>
    );
}


//STYLES
const Logo = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    background-color: #C3CFD9;
    color: #E8833A;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 68px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`

