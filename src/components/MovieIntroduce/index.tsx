"use client";

import React, {useState, useEffect} from "react";
import Title from "antd/es/typography/Title";
import {Row, Col, Image, Typography, Skeleton, message, Flex} from "antd";
import MovieTrailer from "@/components/MovieTrailer";
import axios from "axios";

interface Props {
    movieId: string;
}

interface Director {
    name: string;
    avatar: string;
}

const MovieIntroduce = (props: Props) => {
    const {movieId} = props;
    const [movieSynopsis, setMovieSynopsis] = useState("");
    const [movieDirector, setMovieDirector] = useState<Director | null>(null);
    const [movieActors, setMovieActors] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const movieActorRes = await axios.get(`https://apis.netstart.cn/maoyan/movie/detail?movieId=${movieId}`);
                const movieData = movieActorRes.data;

                setMovieSynopsis(movieData.movie.dra);
                setMovieDirector({
                    name: movieData.movie.dir,
                    avatar: movieData.celebrities.find((celeb: any) => celeb.cnm === movieData.movie.dir)?.avatar || ""
                });
                setMovieActors(
                    movieData.celebrities
                        .filter((celebrity: any) => celebrity.desc.includes("饰"))
                        .map((celebrity: any) => ({
                            name: celebrity.cnm,
                            role: celebrity.roles,
                            avatar: celebrity.avatar
                        }))
                );
                setTrailers(
                    movieData.feedVideos.feeds
                        .filter((video: any) => video.video.typeDesc === "预告片")
                        .map((video: any) => ({
                            title: video.title,
                            duration: video.video.dur,
                            imageUrl: video.video.imgUrl,
                            videoUrl: video.video.url
                        }))
                );
            } catch (error) {
                console.error("Error loading movie details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [movieId]);

    return (
        <>
            {loading ? (
                <Skeleton active paragraph={{rows: 10}}/>
            ) : (
                <div style={{padding: '16px'}}>
                    <Flex vertical={true} align={"flex-start"}>
                        {/* 第一行：导演信息 */}
                        <Title level={4} style={{borderLeft: "4px solid skyblue", paddingLeft: 8}}>导演</Title>
                        <div style={{textAlign: "center", padding: 16}}>
                            <Image src={movieDirector?.avatar} width={120} height={150} style={{borderRadius: 8}}/>
                            <div style={{fontWeight: "bold", marginTop: 8}}>{movieDirector?.name}</div>
                        </div>
                    </Flex>
                    <Flex vertical={true} align={"flex-start"}>
                        {/* 第二行：剧情简介和演员列表 */}
                        <Title level={4} style={{borderLeft: "4px solid skyblue", paddingLeft: 8}}>剧情简介</Title>
                        <Typography.Text style={{padding: "8px 16px", display: "block"}}>
                            {movieSynopsis}
                        </Typography.Text>

                        <Title level={4} style={{borderLeft: "4px solid skyblue", paddingLeft: 8}}>演员列表</Title>
                        <Row gutter={[16, 16]} style={{marginTop: 8}}>
                            {movieActors.map((item: any, index: number) => (
                                <Col key={index} xs={12} sm={8} md={6} lg={4} style={{textAlign: "center"}}>
                                    <Image src={item.avatar} width={100} height={120}
                                           style={{borderRadius: 8, marginBottom: 8}}/>
                                    <div style={{fontWeight: "bold"}}>{item.name}</div>
                                    <div>{"饰: " + item.role}</div>
                                </Col>
                            ))}
                        </Row>
                    </Flex>
                    {/* 第三行：预告片 */}
                    <Title level={4}
                           style={{borderLeft: "4px solid skyblue", paddingLeft: 8, marginTop: 24}}>预告片</Title>
                    <div style={{padding: 16}}>
                        <MovieTrailer trailers={trailers}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieIntroduce;