import React from 'react';
import { Row,Col } from 'antd';
import MainList from './main-list';
import MainCarousel from './main-carousel';

const Main = () => {
    return (
        <div style={{ width: '100%' }}>
            <Row gutter={4}>
                <Col span={24}>
                  <MainCarousel />     
                </Col>
                <Col span={24}>
                    <Row justify='center'>
                         <MainList />
                    </Row>    
                </Col>
            </Row>
        </div>
    );
}

export default Main;
