const { remote } = require('electron')
const loader = require('monaco-loader')

const rendererWindow = remote.getCurrentWindow()

loader().then((monaco) => {
  const div = document.querySelector('#container')
  const editor = monaco.editor.create(div, {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })

  rendererWindow.show()
})