"use client"

import React from 'react';
import {Avatar, Divider, Flex, List, Space, Typography} from 'antd';
import Title from "antd/es/typography/Title";

interface Props {
    movieExpectedMovieList: []
}

const movieExpectedMovieList = (props: Props) => {

    const {movieExpectedMovieList} = props;



    return (
        <List
            style={{width: "100%"}}
            itemLayout="horizontal"
            dataSource={movieExpectedMovieList}
            size={"small"}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        title={
                            <Flex align={"center"} justify={"space-between"} >
                                <div>
                                    {item.nm}
                                </div>
                                <div>
                                    {item.comingTitle}
                                </div>
                            </Flex>
                        }
                        avatar={<Avatar src={item.img} />}
                        />
                </List.Item>
            )}
        />
    );


}

export default movieExpectedMovieList