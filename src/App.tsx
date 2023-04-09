import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomHeader from './component/header';
import { Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import CustomFooter from './component/footer';
import loadable from '@loadable/component';

const Main = loadable(() => import('./component/main'));
const Wiki = loadable(() => import('./component/wiki'));
const WikiDetail = loadable(() => import('./component/wiki-detail'));

const App = () => {
  return (
    <>
      <Layout>
        <CustomHeader />
        <Content 
          style={{
            backgroundColor: 'white',
          }}>
          <Row style={{ height: '90vh' }} justify='center'>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/wiki' element={<Wiki />} />
                <Route path='/wiki/detail/:id' element={<WikiDetail />} />
            </Routes>
          </Row>
        </Content>
        <CustomFooter />
      </Layout>
    </>
  );
}

export default App;
