// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossedImage: HEADS_IMAGE_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = HEADS_IMAGE_URL
      updatedHeadsCount += 1
    } else {
      tossImage = TAILS_IMAGE_URL
      updatedTailsCount += 1
    }

    this.setState({
      tossedImage: tossImage,
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {tossedImage, headsCount, tailsCount} = this.state

    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="des">Heads (or) Tails</p>
          <img src={tossedImage} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {headsCount + tailsCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
