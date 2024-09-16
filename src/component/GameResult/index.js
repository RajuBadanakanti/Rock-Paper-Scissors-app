// Game Result
import {
  GameResultContainer,
  GameResultContentContainer,
  ResultContainer,
  Choice,
  YourImage,
  ResultStatusText,
  PlayAgainButton,
} from './styledComponents'

const GameResult = props => {
  const {
    yourChoiceDetails,
    opponentChoiceDetails,
    gameResultStatus,
    onPlayAgainBtn,
  } = props
  const {imageUrl} = yourChoiceDetails
  const {opponentImage} = opponentChoiceDetails

  const onClickPlayAgain = () => {
    onPlayAgainBtn()
  }
  return (
    <GameResultContainer>
      <GameResultContentContainer>
        <ResultContainer>
          <Choice>YOU</Choice>
          <YourImage src={imageUrl} alt="your choice" />
        </ResultContainer>

        <ResultContainer>
          <Choice>OPPONENT</Choice>
          <YourImage src={opponentImage} alt="opponent choice" />
        </ResultContainer>
      </GameResultContentContainer>

      <ResultStatusText>{gameResultStatus}</ResultStatusText>
      <PlayAgainButton type="button" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </PlayAgainButton>
    </GameResultContainer>
  )
}

export default GameResult
