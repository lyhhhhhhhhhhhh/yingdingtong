"use client"

import {Button, Card, Col, Divider, Image, Row, Space, Tag, Typography} from "antd";
import {Fragment, useState} from "react";


const TestSelectSeat = () => {
    const totalSeats = 72; // 总座位数量
    const seatsPerRow = 12; // 每排座位数量
    const rows = Math.ceil(totalSeats / seatsPerRow); // 总行数
    const dividerRow = Math.floor(seatsPerRow / 2); // 虚线行的位置

    const seatTypes = [
        {src: "/assets/seat.png", label: "可选座位"},
        {src: "/assets/seat-unselected.png", label: "已选座位"},
        {src: "/assets/seat-selected.png", label: "已售座位"},
    ];

    const [newSelectSeat, setNewSelectSeat] = useState([])

    const handleSelectSeat = () => {
        console.log(newSelectSeat)

    }

    // 生成座位布局
    // 以数组为单位 生成
    const seatRows = Array.from({length: rows}, (_, rowIndex) => {
        return (
            <Space key={rowIndex} style={{marginBottom: 10}} size={10}>
                {Array.from({length: seatsPerRow}).map((_, seatIndex) => {

                    const [imageSrc, setImageSrc] = useState<string>("/assets/seat.png")

                    const handleImageClick = (index) => {
                        // 切换图片地址
                        setImageSrc((prevSrc) =>
                            prevSrc === "/assets/seat.png" ? "/assets/seat-unselected.png" : "/assets/seat.png"
                        );
                        // 添加或移除座位索引
                        //prevSelectedSeats 就是 newSelectSeat 的当前状态值，也即是上一次保存的选座数组
                        setNewSelectSeat((prevSelectedSeats) => {
                            // 检查当前座位是否已经被选择
                            if (prevSelectedSeats.includes(index)) {
                                // 如果已选择，则从数组中移除
                                return prevSelectedSeats.filter(seatIndex => seatIndex !== index);
                            } else {
                                // 如果未选择，则添加到数组
                                return [...prevSelectedSeats, index];
                            }
                        });

                    };

                    const seatNumber = rowIndex * seatsPerRow + seatIndex;
                    if (seatNumber >= totalSeats) return null; // 超出总座位数量时不渲染
                    return (
                        <Image
                            key={seatIndex}
                            src={imageSrc}
                            width={30}
                            height={30}
                            preview={false}
                            style={{margin: '2px'}}
                            onClick={
                                () => {
                                    console.log(`座位 ${seatNumber} 被点击`);
                                    handleImageClick(seatNumber)
                                }
                            }
                        />
                    );
                })}
            </Space>
        );
    });

    return (
        <div style={{padding: 20, minWidth: 1000}}>
            <Card style={{padding:0}}>
                <Row gutter={24}>
                    {/* 左侧信息卡片 */}
                    {/* 左侧信息卡片 */}
                    <Col span={8} style={{ backgroundColor: '#f0f2f5'}}>
                        <Row gutter={24} align="top">
                            {/* 左侧图片 */}
                            <Col span={12}>
                                <Image
                                    src="https://img.alicdn.com/bao/uploaded/i4/O1CN01p1gEYA1IeUad9PE1d_!!6000000000918-0-alipicbeacon.jpg_300x300.jpg"
                                    width="100%"
                                />
                            </Col>
                            {/* 右侧描述文字 */}
                            <Col span={12}>
                                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                                    <Typography.Title level={4} style={{ whiteSpace: 'normal' }}>
                                        毒液:最后一舞
                                    </Typography.Title>
                                    <Typography.Text type="secondary" style={{ whiteSpace: 'normal', fontSize: 13 }}>
                                        类型：动作、科幻、惊悚
                                    </Typography.Text>
                                    <Typography.Text type="secondary" style={{ whiteSpace: 'normal', fontSize: 13 }}>
                                        时长：109分钟
                                    </Typography.Text>
                                </Space>
                            </Col>
                        </Row>
                        <Space direction="vertical" size="small" style={{ width: '100%', marginTop: 12 }}>
                            <Typography.Paragraph>
                                <Typography.Text type="secondary">影院: </Typography.Text>
                                <Typography.Text>1929嘉莱电影公园(武汉光谷店)</Typography.Text>
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                <Typography.Text type="secondary">影厅: </Typography.Text>
                                <Typography.Text>三号厅</Typography.Text>
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                <Typography.Text type="secondary">版本: </Typography.Text>
                                <Typography.Text>原版3D</Typography.Text>
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                <Typography.Text type="secondary">场次: </Typography.Text>
                                <Typography.Text style={{ color: "red" }}>11月7 22:10</Typography.Text>
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                <Typography.Text type="secondary">票价: </Typography.Text>
                                <Typography.Text>¥34.9/张</Typography.Text>
                            </Typography.Paragraph>
                        </Space>
                        <Divider style={{ margin: '12px 0', width: '100%' }} dashed />
                        <Typography.Paragraph>
                            <Typography.Text type="secondary">座位: </Typography.Text>
                            <Typography.Text>一次最多选择6个座位</Typography.Text>
                        </Typography.Paragraph>
                        {/* Tag 显示选中的座位 */}
                        {!newSelectSeat.length ? (
                            <Typography.Text style={{ display: "block", textAlign: "center" }}>
                                请 <Typography.Text style={{ color: "red" }}>点击左侧</Typography.Text> 座位图选择座位
                            </Typography.Text>
                        ) : (
                            <Space wrap style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                                {newSelectSeat.map((seat) => (
                                    <Tag key={seat}>{`座位 ${seat + 1}`}</Tag>
                                ))}
                            </Space>
                        )}
                        <Typography.Paragraph style={{marginTop:24}}>
                            <Typography.Text type="secondary">总价: </Typography.Text>
                            <Typography.Text style={{color:"red"}}>¥<Typography.Text style={{fontSize:24,color:"red"}}>0</Typography.Text></Typography.Text>
                        </Typography.Paragraph>
                        <Divider style={{ margin: '12px 0', width: '100%' }} dashed />
                        <Typography.Paragraph style={{textAlign:"center"}}>
                            <Typography.Text type="secondary">手机号: </Typography.Text>
                            <Typography.Text>185****4641</Typography.Text>
                        </Typography.Paragraph>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                size="large"
                                type="primary"
                                style={{ width: '80%', marginTop: 12, borderRadius: '24px',marginBottom: 24 }} // 设置圆角
                                disabled={newSelectSeat.length === 0}
                                onClick={() => {
                                    // 处理确认选座逻辑
                                    handleSelectSeat();
                                }}
                            >
                                确认选座
                            </Button>
                        </div>
                    </Col>

                    {/* 右侧选座区域 */}
                    <Col span={16}>
                        <div style={{textAlign: 'center', marginBottom: 20}}>
                            <Space size={20}>
                                {seatTypes.map((seat, index) => (
                                    <Typography.Text key={index}>
                                    <span style={{marginRight: 8}}>
                                        <Image src={seat.src} width={20} height={20} preview={false}/>
                                    </span>
                                        {seat.label}
                                    </Typography.Text>
                                ))}
                            </Space>
                        </div>
                        {/* 屏幕部分 */}
                        <div style={{textAlign: 'center', marginBottom: 20}}>
                            <Image src="/assets/screen.png" height={100} preview={false}/>
                            <Typography.Text style={{display: 'block', marginTop: 8}}>荧幕中央</Typography.Text>
                        </div>

                        {/* 座位部分 */}
                        <div style={{textAlign: 'center'}}>
                            {seatRows.map((row, index) => (
                                <Fragment key={index}>
                                    {row}
                                    {/* 在中间位置插入虚线 */}
                                    <Divider type={"vertical"} dashed style={{borderColor: '#ccc', margin: '12px 0'}}/>
                                </Fragment>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default TestSelectSeat;