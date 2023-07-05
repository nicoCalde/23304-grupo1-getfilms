import React, { useEffect, useState } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../button/Button';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './hero-slide.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HeroSlide() {

    SwiperCore.use([Autoplay]);

    const [ moviItems, setMovieItems ] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
        const params = {page: 1}
        try {
            const response = await tmdbApi.getMovieList(movieType.popular, {params});
            setMovieItems(response.results.slice(0, 8));
            console.log(response);
        } catch {
            console.log('error');
        }
        }
        getMovies();
    }, [])

    return (
        <div className='hero-slide'>
            <Swiper modules={[Autoplay]} grabCursor={true} spaceBetween={0} slidesPerView={1} autoplay={{delay: 3000}}>
                {
                    moviItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`}/>
                            )}
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
        </div>
    )
}

const HeroSlideItem = props => {
    let history = useHistory();

    const item = props.item;

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path );

    return (
        <div className={`hero-slide__item ${props.className}`} style={{backgroundImage: `url(${background})`}}>
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie/' + item.id)}>
                            Ver ahora
                        </Button>
                        <OutlineButton onClick={() => console.log('trailer')}>
                            Ver trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSlide;