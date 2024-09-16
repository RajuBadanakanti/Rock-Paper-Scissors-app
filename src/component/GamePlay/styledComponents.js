import styled from 'styled-components'

export const ButtonItemContainer = styled.li`
  width: 40%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 35%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    padding: 10px;
  }
`
export const ChoiceButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
export const ButtonImg = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 90%;
  }
`
