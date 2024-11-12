"use client";

import { Avatar, List, Typography } from "antd";
import Title from "antd/es/typography/Title";

interface Trailer {
    title: string;
    duration: number;
    imageUrl: string;
    videoUrl: string;
}

interface Props {
    trailers: Trailer[];
}

const MovieTrailer = ({ trailers }: Props) => {
    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={trailers}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.imageUrl} shape="square" style={avatarStyle} />}
                            title={
                                <a href={item.videoUrl || "#"} target="_blank" rel="noopener noreferrer">
                                    {item.title || "暂无标题"}
                                </a>
                            }
                            description={item.duration ? `${item.duration}秒` : "时长未知"}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

// 样式对象
const sectionTitleStyle = {
    borderLeft: "4px solid skyblue",
    paddingLeft: 8,
};

const avatarStyle = {
    width: 80,
    height: 80,
};

export default MovieTrailer;