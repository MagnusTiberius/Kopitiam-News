import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let randomURLS = [
            'https://static.photocdn.pt/images/articles/2019/02/28/Best_Variable_ND_Filters_of_2019.jpg', 
            'https://www.busytourist.com/wp-content/uploads/2019/06/Hot-air-balloon-flying-over-Cappadocia.jpg',
            'https://cdn.pixabay.com/photo/2015/09/04/23/48/times-square-923269_960_720.jpg',
            'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80',
            'https://www.worldphoto.org/sites/default/files/gallery/images/704569/3b5e7c0b23f541907e4cbeee03c53539.mmexport1503749895409-01-01-01.jpeg',
            'https://capturetheatlas.com/wp-content/uploads/2018/11/FOM_6457.jpg',
            'https://csxdv4esgai1mnubi1i68jpm-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Tobias_Richter_MG_2955-900x600.jpg',
            'https://cdn.naturettl.com/wp-content/uploads/2015/06/22015015/featured1.jpg',
            'http://azure.wgp-cdn.co.uk/app-food-heaven/posts/jeshoots-com-p8kaVRe4edM-unsplash.jpg?&format=webp&webp.quality=40&scale=both',
            'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Shot-on-iPhone-Challenge-Announcement-Forest_big.jpg.large.jpg',
            'https://www.apple.com/newsroom/images/tile-images/Apple_shot-on-iphone-challenge-winners_konstantin-chalabov_03032020.jpg.landing-big_2x.jpg'

        ];  
        var random  = randomURLS[Math.floor(Math.random() * randomURLS.length)];
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
                <div className='my-2 h-100'>
                    <div className="card h-100 mx-auto">
                    <a href={newsUrl} target="_blank" rel='noreferrer' className='newslinks'>
                        <img src={!imageUrl?random:imageUrl} className="card-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                                <div id='description'>
                                    <p className="card-text">{description}</p>
                                </div>
                        </div>
                    </a>
                    </div>
                </div>
        )
    }
}

export default NewsItem
