"use client";

import { Tabs } from "antd";
import MovieIntroduce from "@/components/MovieIntroduce";

interface Props {
    movieId:string
}

const MovieDetailTabs = ({ movieId }: Props) => {
    return (
        <Tabs
            defaultActiveKey="1"
            items={[
                {
                    key: '1',
                    label: '介绍',
                    children: (
                        <MovieIntroduce movieId={movieId}/>
                    ),
                },
            ]}
            // 若不需要可去除此事件
            onChange={(key) => console.log(key)}
        />
    );
};

export default MovieDetailTabs;