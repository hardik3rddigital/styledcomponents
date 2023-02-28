import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

function StyledNested(Props) {
  const theme2 = {
    color: {
      textColor: "red",
      textWeight: "bold",
      fontSizeAs: "20px",
    },

    responsive : {
        mobile:"768px",
        tab:"1024px"
    }
  };

  const Anynameuse = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor: pointer;
    transition:all 1s ease;

    &:hover {
      background: palevioletred;
      color: #fff;
    }

    .iamspan {
      color: black;
      b {
        font-weight: bold;

        &:after {
          content: " Here";
        }
      }
    }
  `;

  const Paragraph = styled.p`
    color: palevioletred;

    &:hover {
      color: #fdaa28;
    }
  `;

  const Shadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;";

  const Box = styled.div`
    box-shadow: ${Shadow};
    padding: 1rem;
    display: grid;
    place-items: center;
    background-color: ${(Props) => Props.backGround};
    font-size: ${({ theme }) => theme2.color.fontSizeAs};


    @media (min-width:${({theme}) => theme2.responsive.mobile}){
        padding: 2rem;
    }
  `;

  return ( 
    <ThemeProvider theme={theme2}>
      <>
        <Anynameuse className="btn">
          Click{" "}
          <span>
            <b>Me</b>
          </span>
        </Anynameuse>
        <Paragraph className="Paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Paragraph>

        <Box backGround="green">
          <Anynameuse className="btn">
            Click{" "}
            <span className="iamspan">
              <b>Me</b>
            </span>
          </Anynameuse>
          <Paragraph className="Paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Paragraph>
        </Box>
      </>
    </ThemeProvider>
  );
}

export default StyledNested;
 