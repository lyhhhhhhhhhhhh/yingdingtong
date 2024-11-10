"use client";

import {listMovieVoByPageUsingPost} from "@/api/movieController";
import {Col, Pagination, Radio, Row, Space} from "antd";
import MovieCard from "@/components/MovieCard";
import {useEffect, useState} from "react";
import DEFAULT_SORT_ORDER_BY from "@/constants/sortOrder";
import MovieFilterPanel from "@/components/MovieSelect";

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

    const loadData = async () => {
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
            setMovieList(res.data.records);
            setMovieTotal(res.data.total);
        } catch (e) {
            console.error("获取电影失败", e);
        }
    };

    useEffect(() => {
        loadData();
    }, [orderBy, current, pageSize, sortOrder, selectedType, selectedYear, selectedRegion]);

    const onChangeOrder = (e) => {
        setOrderBy(e.target.value);
    };

    // 子组件的回调，用于接收筛选条件的变化
    const onFilterChange = (type, year, region) => {
        // 判断是否选择了“全部”，如果是，则传递空字符串
        setSelectedType(type === "全部" ? "" : type);
        setSelectedYear(year === "全部" ? "" : year);
        setSelectedRegion(region === "全部" ? "" : region);
    };

    // 分页变化的回调
    const onPageChange = (page, pageSize) => {
        setCurrent(page);
        setPageSize(pageSize);
    };

    return (
        <div style={{marginTop: 16}}>
            <MovieFilterPanel onFilterChange={onFilterChange}/>
            <Radio.Group onChange={onChangeOrder} value={orderBy} style={{marginBottom: 16}}>
                <Radio value="createTime">按时间排序</Radio>
                <Radio value="movieRating">按评分排序</Radio>
            </Radio.Group>
            <Row gutter={[24, 24]} justify="start">
                {movieList.length > 0 ? (
                    movieList.map((item) => (
                        <Col key={item.id} span={4}>
                            <MovieCard
                                moviePicture={item.moviePicture}
                                movieTitle={item.movieTitle}
                                movieId={item.id}
                                isComing={true}
                                shoInfo={
                                    <Space direction="vertical" size="small" style={{display: "flex"}}>
                                        <p style={{textOverflow: "ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>{item.movieType}</p>
                                        <p>{item.createTime.substring(0, 10)}</p>
                                        <p>时长:{item.movieDuration} 评分:{item.movieRating}</p>
                                    </Space>
                                }
                            />
                        </Col>
                    ))
                ) : (
                    <p>暂无电影数据</p>
                )}
            </Row>
            {/* 分页组件 */}
            <Row justify="end">
                <Pagination
                    style={{marginTop: 16, marginBottom: 16, textAlign: "center",}}
                    current={current}
                    pageSize={pageSize}
                    total={movieTotal}
                    onChange={onPageChange}
                />
            </Row>
        </div>
    );
};

export default MoviesPage;