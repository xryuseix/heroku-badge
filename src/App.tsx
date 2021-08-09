import React from 'react'
// import './App.css';
import { useLocation } from 'react-router-dom'
// import { fetch } from 'node-fetch'

interface AppProps {
  appName: string
}

interface AppState {
  badgeURL: string
  appName: string
}

class Badge extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      badgeURL: '',
      appName: props.appName,
    }
  }

  async componentDidMount() {
    const fetch = require('node-fetch')
    console.log(this.state.appName)
    try {
      // ここCPRSで怒られる
      const response = await fetch(
        `https://${this.state.appName}.herokuapp.com`,
      )
      const activeFlag: boolean = response.ok
      const status: string = activeFlag ? 'Activate' : 'Inactivate'
      const badgeColor: string = activeFlag ? '624888' : 'D35C46'
      this.setState({
        badgeURL: `https://img.shields.io/badge/${this.state.appName.replace(
          /-/g,
          '_',
        )}-${status}-${badgeColor}?logo=heroku`,
      })
    } catch (err) {
      this.setState({
        badgeURL: `https://img.shields.io/badge/404-param_is_undefined-D35C46?logo=heroku`,
      })
    }
  }

  render() {
    return <div>{this.state.badgeURL}</div>
  }
}

const App = () => {
  const search = useLocation().search
  const query = new URLSearchParams(search)
  const appName = query.get('app')
  if (!appName && (appName ?? true)) {
    return (
      <div>
        <h2>Usage page{appName}</h2>
      </div>
    )
  }
  return <Badge appName="neet-observer" />
}

export default App
