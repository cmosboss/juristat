/**
 * Created by Taylor on 7/12/2017.
 */
import React, { Component } from 'react';
import './materialize.min.css';
import '../fonts/roboto/Roboto-Thin.woff2';
import './Card.css';
import axios from 'axios';

class Card extends Component {

	removeItem = () => {
		let that = this;
		axios.get('/api/delete/article/'+that.props.articleId)
			.then(function (response) {
				if (response.status === 200){
					that.props.remove(that.props.articleIndex);
				}else{
					console.log(response.statusText);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	render() {
		return (
			<div className="row">
				<div className="col s12 xl6 cardCol">
					<div className="card z-depth-3">
						<div className="card-image">
							<img src={this.props.image} alt={this.props.headline}/>
							<span className="card-title">{this.props.headline}</span>
							<div onClick={this.removeItem} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">visibility_off</i></div>
						</div>
						<div className="card-content">
							<p>Link to full article <a target="_blank" href={this.props.url}>here</a></p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
