// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  AppStatus,
  AppImage,
  ToggleButton,
} from './styledComponents'

// Example usage in a component
const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const toggleLock = () => {
    setIsLocked(prevIsLocked => !prevIsLocked)
  }
  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  return (
    <AppContainer>
      <AppImage src={imageUrl} alt={isLocked ? 'lock' : 'unlock'} />
      <AppStatus theme={{isLocked}}>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </AppStatus>
      <ToggleButton onClick={toggleLock}>
        {isLocked ? 'Unlock' : 'Lock'}
      </ToggleButton>
    </AppContainer>
  )
}

export default Unlock
