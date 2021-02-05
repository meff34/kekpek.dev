import monoRegularWoff2 from '../../assets/fonts/JetBrainsMono-Regular.woff2'
import monoBoldWoff2 from '../../assets/fonts/JetBrainsMono-Bold.woff2'

export const jetBrainsFontFaces = `
@font-face {
    font-family: 'JetBrains Mono';
    src: url('${monoRegularWoff2}') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'JetBrains Mono';
    src: url('${monoBoldWoff2}') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
`
