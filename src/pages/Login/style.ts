import styled from "@emotion/styled";

export const page = styled.div`
  width: 100vw;
  margin-top: 100px;
  ${(props) => props.theme.flexRow("center")}
`;

export const Img = styled.img`
  position: absolute;
  width: 400px;
  z-index: -10;
  left: 20%;
  top: 20%;
`;

export const loginbox = styled.div`
  max-width: 60vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;

  button {
    margin-top: 25px;
  }
`;

export const welcometext = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: right;
  white-space: pre-line;
  place-self: end;
  line-height: 1.2;
`;

export const Input = styled.input`
  border: 2.5px solid ${(props) => props.theme.color.lightgray};
  width: 30vw;
  height: 50px;
  margin: 5px 0px;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 26px;

  &::placeholder {
    font-size: 18px;
  }

  &:focus {
    border-color: ${(props) => props.theme.color.darkblue};
    outline: none;
  }
`;

export const Form = styled.form`
  ${(props) => props.theme.flexColumn("", "center")}
`;
