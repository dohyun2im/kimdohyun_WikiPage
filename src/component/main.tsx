import React from 'react';
import { Row,Col } from 'antd';
import { useSelector } from 'react-redux';
import MainList from './main-list';
import MainCarousel from './main-carousel';

const Main = () => {
    const wiki = useSelector((state:any) => state.wiki.wikiColumns);
    console.log(wiki);
    return (
        <div style={{ width: '100%' }}>
            <Row gutter={4}>
                <Col span={24}>
                  <MainCarousel />     
                </Col>
                <Col span={24}>
                    <MainList />
                </Col>
            </Row>
        </div>
    );
}

export default Main;
