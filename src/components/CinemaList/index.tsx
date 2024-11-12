"use client"

import {Button, List, Pagination, Row, Select, Space, Tag} from "antd";
import Title from "antd/es/typography/Title";
import {listCinemaVoByPageUsingPost} from "@/api/cinemaController";
import {useEffect, useState} from "react";
import Link from "next/link";

interface Props {
    cinemaAddress: string
    cinemaTags: string
    cinemaTitle:string
}

const CinemaList = (props: Props) => {

    const {cinemaAddress, cinemaTags,cinemaTitle} = props

    const [paginationConfig, setPaginationConfig] = useState({
        current: 1,    // 当前页
        pageSize: 10,  // 每页显示条数
        total: 0,       // 数据总数
    })

    const [cinemaList, setCinemaList] = useState([])

    const loadData = async () => {
        try {
            const res = await listCinemaVoByPageUsingPost({
                current: paginationConfig.current,
                pageSize: paginationConfig.pageSize,
                cinemaAddress,
                cinemaTags,
                cinemaTitle
            })
            setCinemaList(res.data.records)
            setPaginationConfig(prevConfig => ({
                ...prevConfig,
                total: res.data.total,
            }))
        } catch (e) {
            console.log(e)
        }
    }


    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onPageChange = (page: number, pageSize?: number) => {
        setPaginationConfig(prevConfig => ({
            ...prevConfig,
            current: page,
            pageSize: pageSize || prevConfig.pageSize,
        }));
    };

    useEffect(() => {
        loadData();
    }, [cinemaAddress,cinemaTags,cinemaTitle,paginationConfig.current,paginationConfig.pageSize]);

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16}}>
                <Title level={4} style={{borderLeft: "4px solid skyblue", paddingLeft: 8}}>影院列表</Title>
                <Select
                    showSearch={false}
                    optionFilterProp="label"
                    defaultValue={"minPrice"}
                    onChange={onChange}
                    style={{width: 100, background: 'transparent'}}
                    options={[
                        {value: 'minPrice', label: '价格低'},
                        {value: 'minDistance', label: '距离近'},
                    ]}
                />
            </div>
            <List
                itemLayout="horizontal"
                dataSource={cinemaList}
                renderItem={(item, index) => (
                    <List.Item extra={
                        <p style={{color: "red"}}>{item.startingPrice}元起
                            <Button type="primary" style={{marginLeft: 16}} danger={true}
                                    shape={"round"}><Link href={`/cinemaDetail/${item.id}`}>选座购票</Link></Button></p>
                    }>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.cinemaTitle}</a>}
                            description={
                                <Space direction={"vertical"} size={"small"} style={{display: "flex"}}>
                                    <p>{"地址: " + item.cinemaAddress}</p>
                                    <div>
                                        {item.cinemaTags.split(',').map((tag: string) => (
                                            <Tag color="blue" key={tag}>{tag}</Tag>
                                        ))}
                                    </div>
                                </Space>
                            }
                        />
                    </List.Item>
                )}
            />
            <Row justify="end">
                <Pagination
                    style={{marginTop: 16, marginBottom: 16, textAlign: "center"}}
                    current={paginationConfig.current}
                    pageSize={paginationConfig.pageSize}
                    total={paginationConfig.total}
                    onChange={onPageChange}
                />
            </Row>
        </>
    )
}

export default CinemaList;