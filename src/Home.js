import React, { Component } from 'react'
import Film from './Film'
import AddMovie from './modal'
import Rating from './star'

const movie = [
  { title: 'Avengers', description: 'Film Marvel', image:'https://www.macommune.info/wp-content/uploads/2019/05/avengers-marvel.jpg' , rating: 2 },
  { title: 'Titanic', description: 'Film Romantique', image:'https://vignette.wikia.nocookie.net/titanic/images/7/79/Affiche_film_Titanic.png/revision/latest?cb=20120716135714&path-prefix=fr', rating: 3 },
  { title: '300', description: 'Film d"action"', image:"https://www.telerama.fr/sites/tr_master/files/56378a29-95d2-4173-a7b2-bb01e036a2d3_2.jpg", rating: 1 }
]
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minrate: 0,
      movielist: movie,
      search :''
    }
  }

  click = (e) => {
    this.setState({
      minrate: e
    })
  }
searching=(e)=>{
  this.setState({search: e.target.value})
}

addNewMovie = ({image, title, description, rating}) => {
  this.setState({
    movielist: this.state.movielist.concat({image, title, description, rating})
  })
}

  render() {
    return (

      <div className="Home">
        <div className="list">
          <div className="header">

            <input type='' placeholder='Type movie name to search' onChange={(e)=>this.searching(e)}/>
            <AddMovie addMovie={this.addNewMovie}/>
            <div className='rating'>
              <p>
                Minimum rating
            </p>

              <div className="star">
                <Rating modifyRating={this.click} rating={this.state.minrate}/>
              </div>
            </div>
          </div>
          <Film list={this.state.movielist.filter(el=> el.title.toUpperCase().includes(this.state.search.toUpperCase().trim()) && el.rating>=this.state.minrate ) } />
        </div>

      </div>

    )
  }
}

