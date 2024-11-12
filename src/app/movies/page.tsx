"use client";

import { listMovieVoByPageUsingPost } from "@/api/movieController";
import { Col, Pagination, Radio, Row, Space } from "antd";
import MovieCard from "@/components/MovieCard";
import { useCallback, useEffect, useState } from "react";
import DEFAULT_SORT_ORDER_BY from "@/constants/sortOrder";
import MovieFilterPanel from "@/components/MovieSelect";
import Link from "next/link";

const MoviesPage = () => {
    const [movieList, setMovieList] = useState([]);
    const [orderBy, setOrderBy] = useState("createTime");
    const [movieTotal, setMovieTotal] = useState(0);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const [sortOrder, setSortOrder] = useState(DEFAULT_SORT_ORDER_BY);
    const [selectedType, setSelectedType] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");

    const loadData = useCallback(async () => {
        try {
            const res = await listMovieVoByPageUsingPost({
                current,
                pageSize,
                sortField: orderBy,
                sortOrder,
                movieType: selectedType,
                movieYear: selectedYear,
                movieRegion: selectedRegion,
            });
            const { records, total } = res.data;
            setMovieList(records);
            setMovieTotal(total);
        } catch (e) {
            console.error("获取电影失败", e);
        }
    }, [current, pageSize, orderBy, sortOrder, selectedType, selectedYear, selectedRegion]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const onChangeOrder = (e) => {
        setOrderBy(e.target.value);
    };

    const onFilterChange = (type, year, region) => {
        setSelectedType(type === "全部" ? "" : type);
        setSelectedYear(year === "全部" ? "" : year);
        setSelectedRegion(region === "全部" ? "" : region);
    };

    const onPageChange = (page, pageSize) => {
        setCurrent(page);
        setPageSize(pageSize);
    };

    return (
        <div style={pageContainerStyle}>
            <MovieFilterPanel onFilterChange={onFilterChange} />
            <Radio.Group onChange={onChangeOrder} value={orderBy} style={radioGroupStyle}>
                <Radio value="createTime">按时间排序</Radio>
                <Radio value="movieRating">按评分排序</Radio>
            </Radio.Group>
            <Row gutter={[24, 24]} justify="start">
                {movieList.length > 0 ? (
                    movieList.map((item) => (
                        <Col key={item.id} span={4}>
                            <Link href={`movie/${item.id}`}>
                                <MovieCard
                                    moviePicture={item.moviePicture}
                                    movieTitle={item.movieTitle}
                                    movieId={item.id}
                                    isComing={true}
                                    shoInfo={
                                        <MovieInfo item={item} />
                                    }
                                />
                            </Link>
                        </Col>
                    ))
                ) : (
                    <p>暂无电影数据</p>
                )}
            </Row>
            <Row justify="end">
                <Pagination
                    style={paginationStyle}
                    current={current}
                    pageSize={pageSize}
                    total={movieTotal}
                    onChange={onPageChange}
                />
            </Row>
        </div>
    );
};

const MovieInfo = ({ item }) => (
    <Space direction="vertical" size="small" style={movieInfoStyle}>
        <p style={textEllipsisStyle}>{item.movieType}</p>
        <p>{item.createTime.substring(0, 10)}</p>
        <p>时长: {item.movieDuration} 评分: {item.movieRating}</p>
    </Space>
);

// 样式对象
const pageContainerStyle = { marginTop: 16 };
const radioGroupStyle = { marginBottom: 16 };
const paginationStyle = { marginTop: 16, marginBottom: 16, textAlign: "center" };
const movieInfoStyle = { display: "flex" };
const textEllipsisStyle = { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" };

export default MoviesPage;