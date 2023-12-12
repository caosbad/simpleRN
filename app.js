// this provides some helpful reset styles to ensure a more consistent look

// only import this from your web app, not native
// import '@tamagui/core/reset.css'

import { TamaguiProvider, Text } from 'tamagui'
import config from './tamagui.config'
export default function App(props) {
  var contents = props['scores'].map((score) => (
    <Text key={score.name}>
      {score.name}:{score.value}
      {'\n'}
    </Text>
  ))
  return (
    <TamaguiProvider config={config}>
      <Text>{contents}</Text>
    </TamaguiProvider>
  )
}
