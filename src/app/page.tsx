"use server"

import {Col, Row} from "antd";
import Link from "next/link";
import Title from "antd/es/typography/Title";
import MovieCard from "@/components/MovieCard";
import {listMovieVoByPageUsingPost} from "@/api/movieController";
import MovieList from "@/components/MovieList";
import axios from "axios";
import MovieExpectedMoviesList from "@/components/MovieExpectedMoviesList";

export default async function Home() {
    // 直接在服务端获取数据
    let movieList = [];

    let mostExpectedMovies = [];

    let comingList = [];

    let classicList = [];

    const isComing = true;

    try {
        const res = await listMovieVoByPageUsingPost({
            current: 1,
            pageSize: 8,
        });
        movieList = res.data.records;
    } catch (e) {
        console.error("获取电影失败", e);
    }

    // 获取热门榜单数据
    try {
        const mostExpectedRes = await axios.get('https://apis.netstart.cn/maoyan/index/mostExpected?ci=1&limit=10&offset=0');
        mostExpectedMovies = mostExpectedRes.data.coming;
    } catch (e) {
        console.log(e)
    }

    // 获取即将上映列表
    try {
        const comingRes = await axios.get('https://apis.netstart.cn/maoyan/index/comingList?ci=1&limit=10');
        comingList = comingRes.data.coming;
    } catch (e) {
        console.log(e)
    }

    try {
        const  moreClassicListRes = await axios.get("https://apis.netstart.cn/maoyan/index/moreClassicList?sortId=1&showType=3&limit=10&offset=0");
        classicList = moreClassicListRes.data.classics;
        console.log(classicList)
    }catch (e) {
        console.log(e)
    }

    return (
        <div style={{minWidth: 800}}>
            <Row gutter={24} justify="start">
                <Col span={16}>
                    <div
                        style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16}}>
                        <Title level={4} style={{color: "red"}}>正在热映</Title>
                        <Link href={"/"}>全部&gt;</Link>
                    </div>
                    <Row gutter={[16, 16]}>
                        {movieList.length > 0 ? (
                            movieList.map((item, index) => (
                                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                                    <MovieCard
                                        moviePicture={item.moviePicture}
                                        movieTitle={item.movieTitle}
                                        movieId={item.id}
                                    />
                                </Col>
                            ))
                        ) : (
                            <p>暂无电影数据</p>
                        )}
                    </Row>
                    <div
                        style={{display: "flex",marginTop: 16}}>
                        <Title level={4} style={{color: "#2D98F3"}}>即将上映</Title>
                    </div>
                    <Row gutter={[16, 16]} style={{marginTop:16}}>
                        {comingList.length > 0 ? (
                            comingList.map((item, index) => (
                                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                                    <MovieCard
                                        moviePicture={item.img}
                                        movieTitle={item.nm}
                                        isComing={isComing}
                                        shoInfo={ <span style={{color: 'red'}}>即将上映</span> }
                                    />
                                </Col>
                            ))
                        ) : (
                            <p>暂无电影数据</p>
                        )}
                    </Row>
                </Col>
                <Col span={8}>
                    <div style={{marginTop: 16, marginLeft: 24}}>
                        <Title level={4} style={{color: "red"}}>热门榜单</Title>
                        <MovieList movieList={movieList}/>
                        <Title level={4} style={{color: "#FFB400"}}>最受期待</Title>
                        <MovieExpectedMoviesList movieExpectedMovieList={mostExpectedMovies}/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}