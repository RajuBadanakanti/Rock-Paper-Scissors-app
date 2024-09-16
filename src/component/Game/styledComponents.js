import styled from 'styled-components'

export const GameAppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 100%;
    min-height: 100vh;
    background-color: #223a5f;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`
export const GameContentContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`

export const ScoreBoardContainer = styled.div`
  height: 120px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    height: 180px;
    background-color: transparent;
    border: 3px solid #ffffff;
    border-radius: 10px;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const CardScoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const CardScoreText = styled.h1`
  width: 120px;
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 150px;
    font-family: 'Bree Serif';
    font-weight: 505;
    font-size: 25px;
    color: #ffffff;
    letter-spacing: 2px;
    margin: 0;
  }
`

export const ScoreCardContainer = styled.div`
  height: 90%;
  width: 100px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 90%;
    width: 180px;
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const ScoreText = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 510;
  color: #223a5f;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-family: 'Bree Serif';
    font-size: 26px;
    font-weight: 510;
    color: #223a5f;
    margin: 0;
  }
`

export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 45px;
  font-weight: 510;
  color: #223a5f;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-family: 'Roboto';
    font-size: 54px;
    font-weight: 510;
    color: #223a5f;
    margin: 0;
  }
`
export const GameStatusContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const ButtonsListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }
`

export const GamePopupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }
`
export const PopupButton = styled.button`
  height: 40px;
  width: 80px;
  background-color: #ffffff;
  outline: none;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 510;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 50px;
    width: 90px;
    padding: 10px;
    background-color: #ffffff;
    outline: none;
    color: #223a5f;
    font-family: 'Bree Serif';
    font-size: 16px;
    font-weight: 510;
    border-radius: 10px;
    cursor: pointer;
  }
`

export const PopupModalContainer = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100%;
    min-height: 700px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
export const PopupcloseButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 0px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 0px;
    margin-left: auto;
  }
`
export const PopupImgContainer = styled.div`
  background-color: #223a5f;
  width: 90%;
  min-height: 400px;
  min-display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    background-color: #223a5f;
    width: 90%;
    min-height: 600px;
    min-display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: 40px;
  }
`
export const PopupRulesImg = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
