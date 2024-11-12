import React from "react";
import MovieDetailTabs from "@/components/MovieDetailTabs";
import MovieDetailTopBar from "@/components/MovieDetailTopBar";
import { getMovieVoByIdUsingGet } from "@/api/movieController";
import axios from "axios";

const movieDetail = async ({ params }) => {
    const { movieId } = params;

    try {
        const movieResponse = await getMovieVoByIdUsingGet({ id: movieId });
        const movieInfo = movieResponse.data;

        return (
            <>
                <MovieDetailTopBar movie={movieInfo} />
                <MovieDetailTabs movieId={movieId} />
            </>
        );
    } catch (e) {
        console.error("Error loading movie details:", e);
        return <div>无法加载电影详情，请稍后重试。</div>;
    }
};

export default movieDetail;