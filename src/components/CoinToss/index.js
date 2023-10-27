// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    randomNum: 0,
  }

  tossingCoin = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    return randomNum <= 50
      ? this.setState(prevState => ({
          total: prevState.total + 1,
          heads: prevState.heads + 1,
          randomNum: {randomNum},
        }))
      : this.setState(prevState => ({
          total: prevState.total + 1,
          tails: prevState.tails + 1,
          randomNum: {randomNum},
        }))
  }

  render() {
    const {total, heads, tails, randomNum} = this.state
    console.log(randomNum)

    return (
      <div className="mainContainer">
        <div className="tossContainer">
          <h1>Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>

          <img
            alt="toss result"
            src={
              randomNum > 50
                ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
            }
          />

          <button type="button" onClick={this.tossingCoin}>
            Toss Coin
          </button>
          <div className="tossResult">
            <p className="p">Total:{total}</p>
            <p className="p">Heads:{heads}</p>
            <p className="p">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
