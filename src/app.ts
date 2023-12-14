import showAppGraph from './relation'

const app = () => {
  console.log('monkey jumping on kintone portal.')
  kintone.events.on('portal.show', () => {
    showAppGraph()
  })
}

export default app
