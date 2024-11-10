"use client"

import React from 'react';
import { Row, Col, Tag, Typography, Divider } from 'antd';

const { Text } = Typography;

const brands = ["全部", "万达影城", "金逸影城", "银兴国际影城", "CGV影城", "华夏国际影城", "横店影视", "中影国际影城", "其他"];
const regions = ["全部", "地铁附近", "洪山区", "武昌区", "江汉区", "江夏区", "汉阳区", "桥口区", "青山区", "新洲区"];
const hallTypes = ["全部", "IMAX厅", "CGS中国巨幕厅", "杜比全景声厅", "Dolby Cinema厅", "RealD厅", "LUXE巨幕厅", "4DX厅", "DTS:X临境音厅", "儿童厅", "4K厅"];
const services = [
    { label: "全部", value: "" },
    { label: "可改签", value: "改签" },
    { label: "可退票", value: "退" }
];

const CinemaSelect = ({
                          selectedBrand,
                          setSelectedBrand,
                          selectedRegion,
                          setSelectedRegion,
                          selectedHallType,
                          setSelectedHallType,
                          selectedService,
                          setSelectedService
                      }) => {
    // 选择“全部”时返回空字符串
    const handleBrandChange = (brand) => setSelectedBrand(brand === "全部" ? "" : brand);
    const handleRegionChange = (region) => setSelectedRegion(region === "全部" ? "" : region);
    const handleHallTypeChange = (hallType) => setSelectedHallType(hallType === "全部" ? "" : hallType);
    const handleServiceChange = (serviceValue) => setSelectedService(serviceValue);

    return (
        <div style={{ padding: 16, border: '1px solid #e8e8e8', marginBottom: 16, width: '100%' }}>
            {/* 品牌 */}
            <Row align="middle" style={{ marginBottom: 16 }}>
                <Col span={2}><Text strong>品牌：</Text></Col>
                <Col span={22}>
                    {brands.map((brand) => (
                        <Tag.CheckableTag
                            key={brand}
                            checked={selectedBrand === "" && brand === "全部" || selectedBrand === brand}
                            onChange={() => handleBrandChange(brand)}
                        >
                            {brand}
                        </Tag.CheckableTag>
                    ))}
                </Col>
            </Row>
            <Divider />
            {/* 行政区 */}
            <Row align="middle" style={{ marginBottom: 16 }}>
                <Col span={2}><Text strong>行政区：</Text></Col>
                <Col span={22}>
                    {regions.map((region) => (
                        <Tag.CheckableTag
                            key={region}
                            checked={selectedRegion === "" && region === "全部" || selectedRegion === region}
                            onChange={() => handleRegionChange(region)}
                        >
                            {region}
                        </Tag.CheckableTag>
                    ))}
                </Col>
            </Row>
            <Divider />
            {/* 影厅类型 */}
            <Row align="middle" style={{ marginBottom: 16 }}>
                <Col span={2}><Text strong>影厅类型：</Text></Col>
                <Col span={22}>
                    {hallTypes.map((hallType) => (
                        <Tag.CheckableTag
                            key={hallType}
                            checked={selectedHallType === "" && hallType === "全部" || selectedHallType === hallType}
                            onChange={() => handleHallTypeChange(hallType)}
                        >
                            {hallType}
                        </Tag.CheckableTag>
                    ))}
                </Col>
            </Row>
            <Divider />
            {/* 影院服务 */}
            <Row align="middle">
                <Col span={2}><Text strong>影院服务：</Text></Col>
                <Col span={22}>
                    {services.map((service) => (
                        <Tag.CheckableTag
                            key={service.value}
                            checked={selectedService === service.value}
                            onChange={() => handleServiceChange(service.value)}
                        >
                            {service.label}
                        </Tag.CheckableTag>
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default CinemaSelect;