import styled, { createGlobalStyle } from 'styled-components'

export const Primary = styled.main`
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
`

export const GlobalStyles = createGlobalStyle`

 :root {
    --maxWidth: 1180px; 
    --white: #fff;
    --myColor: #663399;
    --veryLightGrey: #f8f9fa;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c; 
    --elegantGrey: #ddd;
    --fontSuperBig: 2.1rem;
    --fontBig: 1.6rem;
    --fontMed: 1.2rem;
    --fontSMed: 1.1rem;
    --fontSmall: 1rem;
    --speeed: 500ms;
  }

  * {
    font-family: 'arial', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

 

  h2,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden],
  template {
    display: none;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;

  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  dfn {
    font-style: italic;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible; 
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }
  optgroup {
    font-weight: 700;
  }
  button{
    overflow: visible;
  }
  input {
    border: 2px solid #DDDDDD;
    overflow: visible;
    padding: 5px 10px 5px 10px;
    outline: transparent;

    :focus, :hover{
      transition: 1s cubic-bezier(.9,.03,.69,.22);
      border: 2px solid black;
    }
  }

  label{
        display: block;
        font-family: Arial;
    }

  button,
  select {
    text-transform: none;
  }
  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    cursor: pointer;
    background-color: var(--darkGrey);
    color: white;
    border: none;
    padding: 7px 12px 7px 12px;
    -webkit-appearance: button;
    font-size: 20px;
    font-family: 'maven pro', Arial;
    -webkit-appearance: button;
    
    :hover{
      opacity: 0.9;
    }
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  textarea {
    overflow: auto;
    width: 100% !important;
    border: 2px solid  #DDDDDD;
    margin-top:5px;
    margin-bottom: 5px;
    min-height: 100px;
    padding: 5px 10px 5px 10px;
    outline: transparent;

    :focus, :hover{
      transition: 1s cubic-bezier(.9,.03,.69,.22);
      border: 2px solid black;
    }

  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  html {
    font: 112.5%/1.45em arial, georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  body {
    color: hsla(0, 0%, 0%, 0.8);
    font-family: 'arial', georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    line-height: 1.7rem;
  }

  h1 {
   font-family: 'Work Sans', Arial;
    font-size: var(--fontBig);
    font-weight: 700;
    letter-spacing: 1px;
    color: #282828;
    line-height: 40px;
    margin-top: 10px;
  }
  h2 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: 'Work Sans', Arial, Helvetica, sans-serif;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
  }
  h3 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Open Sans, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.38316rem;
    line-height: 1.1;
  }
  h4 {
    font-family: Arial;
    font-weight: 800;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  h5 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-variant: normal;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 10px;
    color: #000;
    text-transform: uppercase;
  }
  h6 {
    font-family: 'Times New Roman';
    font-size: 28px;
    color: #fff;
    font-style: italic;
    margin: 40px 20% 20px 20%;
    line-height: 35px;
  }
  hgroup {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  ul {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  ol {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  dl {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  figure {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }
  table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }
  fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }
  address {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  b {
    font-weight: bold;
  }
  strong {
    font-weight: bold;
  }
  dt {
    font-weight: bold;
  }
  th {
    font-weight: bold;
  }
  li {
    margin-bottom: calc(1.45rem / 2);
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(1.45rem / 2);
  }
  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }
  thead {
    text-align: left;
  }
  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
  }
  th:first-child,
  td:first-child {
    padding-left: 0;
  }
  th:last-child,
  td:last-child {
    padding-right: 0;
  }
  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: 'SFMono-Regular', Consolas, 'Open Sans Mono', 'Droid Sans Mono',
      'Liberation Mono', Menlo, Courier, monospace;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
  pre code {
    background: none;
    line-height: 1.42;
  }
  
  ::-moz-selection { /* Code for Firefox */
  color: white;
  background: var(--darkGrey);
}

::selection {
  color: white;
  background: var(--darkGrey);
}
  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: ' ';
  }
  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: '';
  }

  @media only screen and (max-width: 768px) {

iframe[src*= "yout"]{
    
  width: 100%;
  height: 350px;

}

iframe[src*= "vimeo"]{
    
  width: 100%;
  height: 350px;

}
}
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`
