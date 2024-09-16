import {ButtonItemContainer, ChoiceButton, ButtonImg} from './styledComponents'

const GamePlay = props => {
  const {buttonsDetails, onChoiceButton} = props
  const {id, imageUrl} = buttonsDetails
  const buttonTestid = `${id.toLowerCase()}Button`

  const onClickChoiceBtn = () => {
    onChoiceButton(id)
  }

  return (
    <ButtonItemContainer>
      <ChoiceButton
        type="button"
        data-testid={buttonTestid}
        onClick={onClickChoiceBtn}
      >
        <ButtonImg src={imageUrl} alt={id} />
      </ChoiceButton>
    </ButtonItemContainer>
  )
}

export default GamePlay
