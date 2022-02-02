import styled from 'styled-components'

export const Content = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.color};
    font-family: 'Inconsolata', monospace;
    box-sizing: border-box;

    #tiny-label {
        margin-top: 30px;
    }
`
export const Header = styled.div`
    display: flex;
    background-color: #000000;
    width: 100%;
    height: 15%;
    border-bottom: 1px solid #000000;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
    }

    @media (max-width: 440px) {
        justify-content: center;
    }
`

export const Title = styled.div`
    display: flex;
    color: #FFFFFF;
    font-size: 24pt;
    align-items: center;

    #hex-icon {
        padding-right: 10px;
        padding-left: 50px;
    }

    @media (max-width: 767px) {
        margin-top: 30px;
        justify-content: center;
    }

    @media (max-width: 440px) {
        margin-top: 20px;
        font-size: 20pt;
        justify-content: center;
        margin-bottom: 10px;
    }
`

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 50px;

    @media (max-width: 767px) {
        justify-content: center;
        padding-right: 0px;
        margin-bottom: 10px;
    }
`

export const Link = styled.a`
    display: flex;
    align-items: center;
    color: #FFFFFF;
    text-decoration: none;
    font-size: 14pt;

    .link-icon {
        padding-right: 10px;
        padding-left: 10px;
    }
`

export const BtnDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 17%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const Button = styled.button`
    font-size: 14pt;
    font-family: 'Inconsolata', monospace;
    color: #FFFFFF;
    background-color: #000000;
    border-radius: 6px;
    border: none;
    padding: 20px;
    cursor: pointer;

    :hover {
        background-color: #202020;
    }
`

export const ColorInput = styled.input`
    height: 40px;
    border-radius: 6px;
    border: none;
    outline: none;
    background-color: #000000;
    color: #FFFFFF;
    font-weight: 500;
    text-align: center;
`

export const CopyLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    
    #copy-icon {
        color: #000000;
        cursor: pointer;

        :hover {
            color: #484848;
        }
    }

    #check-icon {
        color: #000000;
    }

    p {
        margin-right: 10px;
    }
`