import React, { useState } from 'react';
import { Row, Col, Tag, Typography, Divider } from 'antd';
import {regions, types, years} from "@/constants/MovieSelectConstants";

const { Text } = Typography;

interface Props {
    onFilterChange: (type: string, year: string, region: string) => void;
}

const MovieFilterPanel: React.FC<Props> = ({ onFilterChange }) => {
    const [selectedType, setSelectedType] = useState("全部");
    const [selectedYear, setSelectedYear] = useState("全部");
    const [selectedRegion, setSelectedRegion] = useState("全部");

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
        onFilterChange(type, selectedYear, selectedRegion); // 将类型、年代和区域传递给父组件
    };

    const handleYearChange = (year: string) => {
        setSelectedYear(year);
        onFilterChange(selectedType, year, selectedRegion); // 将类型、年代和区域传递给父组件
    };

    const handleRegionChange = (region: string) => {
        setSelectedRegion(region);
        onFilterChange(selectedType, selectedYear, region); // 将类型、年代和区域传递给父组件
    };

    return (
        <div style={{ padding: 16, border: '1px solid #e8e8e8', marginBottom: 16, width: '100%' }}>
            {/* 类型 */}
            <Row align="middle" style={{ marginBottom: 16 }}>
                <Col span={1}><Text strong>类型：</Text></Col>
                <Col span={23}>
                    {types.map((type) => (
                        <Tag.CheckableTag
                            key={type}
                            checked={selectedType === type}
                            onChange={() => handleTypeChange(type)}
                        >
                            {type}
                        </Tag.CheckableTag>
                    ))}
                </Col>
            </Row>
            <Divider />
            {/* 区域 */}
            <Row align="middle" style={{ marginBottom: 16 }}>
                <Col span={1}><Text strong>区域：</Text></Col>
                <Col span={23}>
                    {regions.map(region => (
                        <Tag.CheckableTag
                            key={region}
                            checked={selectedRegion === region}
                            onChange={() => handleRegionChange(region)}
                        >
                            {region}
                        </Tag.CheckableTag>
                    ))}
                </Col>
            </Row>
            <Divider />
            {/* 年代 */}
            <Row align="middle">
                <Col span={1}><Text strong>年代：</Text></Col>
                <Col span={23}>
                    {years.map((year) => (
                        <Tag.CheckableTag
                            key={year}
                            checked={selectedYear === year}
                            onChange={() => handleYearChange(year)}
                        >
                            {year}
                        </Tag.CheckableTag>
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default MovieFilterPanel;