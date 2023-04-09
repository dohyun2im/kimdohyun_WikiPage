import React from 'react';
import { List, Avatar, Space, Row } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Wikis } from '../store/wiki-slice';
import WikiModal from './wiki-modal';

const Wiki = () => {
    const wiki = useSelector((state:any) => state.wiki.wikiColumns);
    const IconText = ({ icon, text }: { icon: React.FC; text: number }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
    );

    return (
        <div>
            <Row className='wiki-top' align='middle' justify='start'>
              <div className='wiki-top-header'>
                <h1>당신이 성장할 수 있는 모든 지식 </h1>
                <h4>Coding Hub에서 다 같이 성장하세요 ! </h4>
              </div>
            </Row>
            <Row align='middle' justify='center'>
              <List
                  header={<WikiModal lastWiki={wiki?.length} />}
                  itemLayout="vertical"
                  size="large"
                  dataSource={wiki}
                  style={{ width: '60vw', height: '70vh', overflowY: 'auto' }}
                  renderItem={(item:Wikis) => (
                  <List.Item
                      key={item.key}
                      actions={[
                      <IconText icon={StarOutlined} text={item.key} key="list-vertical-star-o" />,
                      <IconText icon={LikeOutlined} text={item.key} key="list-vertical-like-o" />,
                      <IconText icon={MessageOutlined} text={item.key} key="list-vertical-message" />,
                      ]}
                  >
                      <List.Item.Meta
                        avatar={<Avatar size={50} src={item.avatar} />}
                        title={<Link to={`/wiki/detail/${item.key}`}>{item.title}</Link>}
                        description={
                          <span>
                              {
                               `${item.content.length > 50 ? 
                                  `${item.content.slice(0,50)} . . .` : 
                                  item.content}`
                              }
                          </span>
                      }
                      />
                  </List.Item>
                  )}
              />
            </Row>          
        </div>
    );
}

export default Wiki;
