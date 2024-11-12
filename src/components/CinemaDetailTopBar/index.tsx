"use client";

import {Breadcrumb, Image, Tag} from "antd";
import Title from "antd/es/typography/Title";
import {Fragment} from "react";

interface Props {
    cinema: any;
}

const tagHints = {
    "退": "未取票用户放映前十分钟可免费退换改签",
    "改签": "未取票用户放映前十分钟可免费改签",
    "小吃": "提供多种小吃供选择",
    "折扣卡": "支持折扣卡支付",
    "杜比全景声厅": "杜比全景声影厅，享受震撼音效",
    "LUXE巨幕厅": "LUXE巨幕影厅，超大屏幕体验",
    "激光厅": "激光放映影厅，画质更清晰",
    "儿童厅": "专为儿童设计的影厅",
    "4D厅": "4D影厅，身临其境的观影体验",
    "DTS:X 临境音厅": "DTS:X 临境音厅，享受逼真的声音效果"
};

const MovieDetailTopBar = ({cinema}: Props) => {
    return (
        <>
            <div style={topBarStyle}>
                <div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start"}}>
                    <Image src={"/assets/cinema.png"} width={240} height={330} preview={false}/>
                    <div style={infoStyle}>
                        <Title level={3} style={titleStyle}>
                            {cinema?.cinemaTitle || "电影标题"}
                        </Title>
                        <Title level={5} style={titleStyle}>
                            {cinema.cinemaAddress}<br/>
                        </Title>
                        <div style={{marginTop: "auto"}}>
                            <div style={{marginTop: 16, display: "flex", flexDirection: "column"}}>
                                {cinema.cinemaTags.split(",").map((tag: string) => (
                                    <div key={tag} style={{display: "flex", alignItems: "center", marginBottom: 8}}>
                                        <Tag color="blue">{tag}</Tag>
                                        <span style={hintStyle}>{tagHints[tag] || tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Breadcrumb
                style={{marginBottom: 16, marginTop: 16}}
                items={[
                    {title: '首页', href: '/'},
                    {title: '影院', href: '/cinema'},
                    {title: cinema?.cinemaTitle || "影院标题"},
                ]}
            />
        </>
    );
};

// 样式对象
const topBarStyle = {
    marginTop: 16,
    backgroundColor: "skyblue",
    height: "370px",
    padding: 20,
    width: "100%",
};

const infoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "330px",
    marginLeft: "40px",
    width: "500px"
};

const titleStyle = {
    color: "white",
};

const hintStyle = {
    marginLeft: "8px",  // 设置标签和描述之间的间距
    color: "gray",
};

export default MovieDetailTopBar;