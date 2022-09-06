import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1,

        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a1ec1c47dff64cc1a11743631374ff5e&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a1ec1c47dff64cc1a11743631374ff5e&page=1`;
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a1ec1c47dff64cc1a11743631374ff5e&page=1`;
            let data = await fetch(url);
            let parsedData = await data.json()
    
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <div className='container my-2'>
                <div className="Kopinews">
                    <h1>Kopinews</h1>
                </div>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="outerCard col-md-12 col-sm-1 mt-2" key={element.url}>
                                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
            </div>
        )
    }
}

export default News
