import React, {useEffect, useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/carousel'

const Trending = () => {

    const[endpoint, setEndpoint]=useState("day")

    const{data,loading}=useFetch(`/trending/all/${endpoint}`);

    const onTabChange=(tab)=>{
        setEndpoint(tab==="day" ? "day":"week");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["day","week"]} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
        </div>
    )
}

export default Trending