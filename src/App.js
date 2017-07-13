import React, { Component } from 'react';
import Card from './Components/Card.js';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		};
	}
	removeArticle = (articleIndex) => {
		let articles = this.state.articles;
		articles.splice(articleIndex, 1);
		this.setState({articles: articles});
	};

	requestData = () => {
		let that = this;
		axios.get('/api/all/articles')
			.then(function (response) {
				that.setState({articles: response.data});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	componentDidMount(){
		this.requestData();
	}
	render() {
		let that = this;
		return (
			<div className="App">
				<h1>Juristat</h1>
					{this.state.articles.map(function(article, i){
						return <Card key={i} articleIndex={i} articleId={article.id} headline={article.headline} image={article.image} url={article.url} remove={that.removeArticle}/>;
					})}
			</div>
		);
	}
}

export default App;
