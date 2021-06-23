import React from "react";
import styled from "styled-components";

function Pin() {
  return (
    <div>
      <Wrapper>
        <Container>
          <img
            src="https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FuJTIwZnJhbmNpc2NvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="#"
          />
        </Container>
      </Wrapper>
    </div>
  );
}

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`;
