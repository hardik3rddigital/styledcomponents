import React from "react";
import styled from "styled-components";

function StyledNested(Props) {
  const Anynameuse = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor: pointer;

    &:hover {
      background: palevioletred;
      color: #fff;
    }

    span {
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
    background-color:${(Props)=> Props.backGround};
  `;



  return (
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
          <span>
            <b>Me</b>
          </span>
        </Anynameuse>
        <Paragraph className="Paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Paragraph>
      </Box>
    </>
  );
}

export default StyledNested;
