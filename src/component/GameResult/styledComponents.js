import styled from 'styled-components'

export const GameResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const GameResultContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
`
export const Choice = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-family: 'Roboto';
    font-size: 25px;
    color: #ffffff;
  }
`

export const YourImage = styled.img`
  height: 100px;
  width: 100px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`
export const ResultStatusText = styled.p`
font-family:"Roboto";
font-size:22px;
font-weight:510;
color:#ffffff;

@media screen and (min-width:768px){{
font-family:"Roboto";
font-size:30px;
font-weight:510;
color:#ffffff;
}
`

export const PlayAgainButton = styled.button`
  height: 45px;
  width: 200px;
  font-family: 'Bree Serif';
  font-size: 15px;
  color: #223a5f;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 55px;
    width: 220px;
    font-family: 'Bree Serif';
    font-size: 20px;
    color: #223a5f;
    border: none;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
  }
`
