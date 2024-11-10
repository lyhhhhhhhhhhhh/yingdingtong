"use client"

import CinemaList from "@/components/CinemaList";
import CinemaSelect from "@/components/CinemaSelect";
import React, { useState } from 'react';

const Cinema = () => {
    // 在 cinema 中定义状态
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedHallType, setSelectedHallType] = useState("");
    const [selectedService, setSelectedService] = useState("");

    return (
        <>
            <CinemaSelect
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                selectedHallType={selectedHallType}
                setSelectedHallType={setSelectedHallType}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
            />
            <CinemaList cinemaAddress={selectedRegion} cinemaTags={selectedHallType} cinemaTitle={selectedBrand}/>
            {/* 分页组件 */}
        </>
    )
}

export default Cinema;