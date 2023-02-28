import React from "react";
import styled from "styled-components";

function StyledButton() {
  const Anynameuse = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  const Paragraph = styled.p`
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    .btn {
      background: #fdaa28;
      border-radius: 3px;
      border: 2px solid #fff;
      color: #fff;
      margin: 0 1em;
      padding: 0.25em 1em;
    }

    .Paragraph {
      color: #fdaa28;
    }
  `;

  return (
    <>
      <Anynameuse className="btn">Click Me</Anynameuse>
      <Paragraph className="Paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.{" "}
      </Paragraph>

      <Wrapper>
        <button className="btn">Click Me</button>
        <p className="Paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </Wrapper>
    </>
  );
}

export default StyledButton;
