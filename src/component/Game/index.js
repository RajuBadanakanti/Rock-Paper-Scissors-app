import {Component} from 'react'
import {Popup} from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GamePlay from '../GamePlay'
import GameResult from '../GameResult'

import 'reactjs-popup/dist/index.css'

import {
  GameAppContainer,
  GameContentContainer,
  ScoreBoardContainer,
  CardScoreText,
  CardScoresContainer,
  ScoreCardContainer,
  ScoreText,
  Score,
  GameStatusContainer,
  ButtonsListContainer,
  GamePopupContainer,
  PopupButton,
  PopupModalContainer,
  PopupcloseButton,
  PopupImgContainer,
  PopupRulesImg,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    isShowResult: false,
    yourSelectedData: {},
    opponentSelectedData: {},
    gameResultStatus: '',
  }

  onChoiceButton = id => {
    const {choicesList} = this.props
    const selectedChoice = choicesList.find(eachButton => eachButton.id === id)
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const opponentData = {
      opponentImage: choicesList[randomNumber].imageUrl,
    }
    // ROCK << SCISSORS << PAPER ...
    if (id === 'ROCK' && choicesList[randomNumber].id === 'SCISSORS') {
      this.setState(prevState => ({
        isShowResult: true,
        yourSelectedData: selectedChoice,
        opponentSelectedData: opponentData,
        score: prevState.score + 1,
        gameResultStatus: 'YOU WON',
      }))
    } else if (id === 'SCISSORS' && choicesList[randomNumber].id === 'PAPER') {
      this.setState(prevState => ({
        isShowResult: true,
        yourSelectedData: selectedChoice,
        opponentSelectedData: opponentData,
        score: prevState.score + 1,
        gameResultStatus: 'YOU WON',
      }))
    } else if (id === 'PAPER' && choicesList[randomNumber].id === 'ROCK') {
      this.setState(prevState => ({
        isShowResult: true,
        yourSelectedData: selectedChoice,
        opponentSelectedData: opponentData,
        score: prevState.score + 1,
        gameResultStatus: 'YOU WON',
      }))
    } else if (id === 'ROCK' && choicesList[randomNumber].id === 'PAPER') {
      this.setState(prevState => ({
        isShowResult: true,
        yourSelectedData: selectedChoice,
        opponentSelectedData: opponentData,
        score: prevState.score - 1,
        gameResultStatus: 'YOU LOSE',
      }))
    } else if (id === 'SCISSORS' && choicesList[randomNumber].id === 'ROCK') {
      this.setState(prevState => ({
        isShowResult: true,
        yourSelectedData: selectedChoice,
        opponentSelectedData: opponentData,
        score: prevState.score - 1,
        gameResultStatus: 'YOU LOSE',
      }))
    } else if (id === 'PAPER' && choicesList[randomNumber].id === 'SCISSORS') {
      this.setState(prevState => ({
        isShowResult: true,
        yourSelectedData: selectedChoice,
        opponentSelectedData: opponentData,
        score: prevState.score - 1,
        gameResultStatus: 'YOU LOSE',
      }))
    } else {
      this.setState(prevState => ({
        isShowResult: true,
        yourSelectedData: selectedChoice,
        opponentSelectedData: opponentData,
        score: prevState.score,
        gameResultStatus: 'IT IS DRAW',
      }))
    }
  }

  onPlayAgainBtn = () => {
    this.setState({isShowResult: false})
  }

  render() {
    const {choicesList} = this.props
    const {
      isShowResult,
      yourSelectedData,
      opponentSelectedData,
      score,
      gameResultStatus,
    } = this.state
    return (
      <GameAppContainer>
        <GameContentContainer>
          <ScoreBoardContainer>
            <CardScoresContainer>
              <CardScoreText>ROCK PAPER SCISSORS</CardScoreText>
            </CardScoresContainer>
            <ScoreCardContainer>
              <ScoreText>Score</ScoreText>
              <Score>{score}</Score>
            </ScoreCardContainer>
          </ScoreBoardContainer>
          {/* GamePlay or GameResult */}
          <GameStatusContainer>
            {isShowResult ? (
              <GameResult
                yourChoiceDetails={yourSelectedData}
                opponentChoiceDetails={opponentSelectedData}
                gameResultStatus={gameResultStatus}
                onPlayAgainBtn={this.onPlayAgainBtn}
              />
            ) : (
              <ButtonsListContainer>
                {choicesList.map(eachButton => (
                  <GamePlay
                    key={eachButton.id}
                    buttonsDetails={eachButton}
                    onChoiceButton={this.onChoiceButton}
                  />
                ))}
              </ButtonsListContainer>
            )}
          </GameStatusContainer>
        </GameContentContainer>
        <GamePopupContainer>
          <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
            {close => (
              <PopupModalContainer>
                <PopupcloseButton
                  type="button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  .
                  <RiCloseLine size="30" color="#000000" />
                </PopupcloseButton>

                <PopupImgContainer>
                  <PopupRulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupImgContainer>
              </PopupModalContainer>
            )}
          </Popup>
        </GamePopupContainer>
      </GameAppContainer>
    )
  }
}

export default Game
