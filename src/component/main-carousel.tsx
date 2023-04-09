import React from 'react';
import { Row, Carousel } from 'antd';
import MediaQuery from "react-responsive";

interface CarouselData {
    key: number;
    content: string;
    url: string;
}
const MainCarousel = () => {
    const mockData:CarouselData[] = [
        {
            key: 1,
            content: '개발자를 위한 노션 작성 방법은 ?',
            url: 'https://tkim.co/wp-content/uploads/2020/10/%E1%84%82%E1%85%A9%E1%84%89%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9-%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AB-%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8-%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5-1-1354x800.png',
        },
        {
            key: 2,
            content: '프론트 개발자가 말하는 UI UX란 ?',
            url: 'https://jbee.io/static/c9afe1da9bfdd7b56c968e2a066ae6c3/350de/about_frontend_2.png',
        },
        {
            key: 3,
            content: '프론트 개발자가 백엔드도 알아야 하나요 ?',
            url: 'https://images.velog.io/images/dbfudgudals/post/9232ad70-81d0-41e7-99b9-fdb373c5dec4/image.png',
        },
    ];

    return (
        <Carousel draggable autoplay autoplaySpeed={6000}>
            {mockData.map((data:CarouselData) => {
                return(
                    <div className={`carousel-content content${data.key}`} key={data.key}>
                        <Row justify='space-between' align='top'>
                            <h1 className='carousel-header'>{data.content}</h1>
                            <MediaQuery minWidth={1000}>
                                <img
                                    className='carousel-img'
                                    src={data.url} 
                                    alt='carousel' 
                                />
                            </MediaQuery>                           
                        </Row>       
                    </div>
                )
            })}
        </Carousel>
    );
}

export default MainCarousel;
