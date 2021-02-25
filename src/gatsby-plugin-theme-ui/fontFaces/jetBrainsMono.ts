import monoRegular from '../../assets/fonts/JetBrainsMono-Regular.woff2'
import monoBold from '../../assets/fonts/JetBrainsMono-ExtraBold.woff2'
import italic from '../../assets/fonts/JetBrainsMono-Italic.woff2'
import italicBold from '../../assets/fonts/JetBrainsMono-BoldItalic.woff2'

export const jetBrainsFontFaces = `
@font-face {
    font-family: 'JetBrains Mono';
    src: url('${monoRegular}') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'JetBrains Mono';
    src: url('${monoBold}') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'JetBrains Mono';
    src: url('${italic}') format('woff2');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'JetBrains Mono';
    src: url('${italicBold}') format('woff2');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}
`
