import React, {useState, useEffect} from "react";
import * as Styled from './styles';
import HexagonTwoToneIcon from '@mui/icons-material/HexagonTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export default function MainPage() {
    
    const [randomColor, setRandomColor] = useState('#FFFFFF');
    const [checkVisible, setCheckVisible] = useState(false);
    const [copyLabelText, setCopyLabelText] = useState("Copy Hex Code");
    
    function newRandomColor() {
        setRandomColor(`#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`);
    }

    function copyCode() {
        let input = document.getElementById("hex-code");
        input.select();
        input.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(input.value);
        setCheckVisible(true);
        setCopyLabelText("Hex Code copied")
        setTimeout(() => {
            setCheckVisible(false);
            setCopyLabelText("Copy Hex Code");
        }, 3000);
    }

    useEffect(() => {
        newRandomColor();
    }, [])

    return (
        <Styled.Content color={randomColor}>
            <Styled.Header>
                <Styled.Title>
                    <HexagonTwoToneIcon id="hex-icon"/>
                    Random Color Generator
                </Styled.Title>
                <Styled.LinksDiv>
                    <Styled.Link href="https://github.com/neskuld" target="_blank">
                        <GitHubIcon className="link-icon"/>
                        Github
                    </Styled.Link>
                    <Styled.Link href="https://www.linkedin.com/in/anacaroline-oliveirasilva/" target="_blank">
                        <LinkedInIcon className="link-icon"/>
                        LinkedIn
                    </Styled.Link>
                </Styled.LinksDiv>
            </Styled.Header>
            <Styled.BtnDiv>
                <Styled.Button
                    color={randomColor}
                    id="random-color-button"
                    onClick={() => {
                        newRandomColor()
                    }}>
                    GIVE ME A RANDOM COLOR!
                </Styled.Button>
            </Styled.BtnDiv>
            <Styled.Row id="tiny-label">
                <p>Color (Hex Code):</p>
            </Styled.Row>
            <Styled.Column>
                <Styled.ColorInput value={randomColor} id="hex-code" disabled />
                <Styled.CopyLink onClick={() => {
                    copyCode();
                }}>
                        <p>{copyLabelText}</p>
                        {checkVisible === false &&
                            <ContentCopyIcon id="copy-icon"/>
                        }
                        {checkVisible && 
                            <CheckIcon style={checkVisible? {opacity: '1'} : {opacity: '0'}} id="check-icon"/>
                        }
                </Styled.CopyLink>
            </Styled.Column>
        </Styled.Content>
    )
}