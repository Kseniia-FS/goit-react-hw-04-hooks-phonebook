import styled from "@emotion/styled";

export const FormWrap = styled.form`
  border: #facbf2 1px solid;
  border-radius: 5px;
  width: 500px;
  display: flex;

  flex-direction: column;
  padding: 25px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  margin: 0 auto;
`;

export const Label = styled.label`
  font-size: 26px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 24px;

  border: 1px solid #cccccc;
  border-radius: 3px;
`;

export const Button = styled.button`
  padding: 5px;
  background-color: #f3bbea;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 1px 3px #faafe1;
  font-size: 16px;
`;
