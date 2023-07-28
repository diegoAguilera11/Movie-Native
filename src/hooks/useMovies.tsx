/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';
import { movieDB } from '../api/movieDB';

interface MovieState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}


export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieState, setMovieState] = useState<MovieState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });


    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
        const top_ratedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upComingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            top_ratedPromise,
            upComingPromise,
        ]);

        setMovieState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,

        });
        setIsLoading(false);
    };


    useEffect(() => {
        // now playing
        getMovies();

    }, []);

    return {
        ...movieState,
        isLoading,
    };
};

