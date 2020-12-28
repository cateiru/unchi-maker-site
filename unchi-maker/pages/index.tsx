import Page from '../components/Page'
import Unchi from '../components/Unchi'

function HomePage() {
  return (
    <Page>
      <Unchi url={window.location.href} />
    </Page>
  )
}

export default HomePage
