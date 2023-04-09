import React from 'react';
import { List, Avatar, Space, Row } from 'antd';
import { LikeOutlined, MessageOutlined, RightOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Wikis } from '../store/wiki-slice';
import WikiModal from './wiki-modal';

const MainList = () => {
    const wiki = useSelector((state:any) => state.wiki.wikiColumns);
    
    const IconText = ({ icon, text }: { icon: React.FC; text: number }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
    );

    return (
        <div style={{ padding: 5 }}>
            <Row align='middle'>
                <Link to='/wiki' style={{ color: 'black', marginRight: 5}}>
                    <h2 className='header'>
                        위키 읽어보기
                        <RightOutlined />
                    </h2>
                </Link>
                <WikiModal lastWiki={wiki?.length}/>
            </Row>
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    position: 'bottom',
                    align: 'start',
                    pageSize: 5,
                }}
                dataSource={wiki}
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
                    avatar={<Avatar src={item.avatar} />}
                    title={<Link to={`/wiki/detail/${item.key}`}>{item.title}</Link>}
                    />
                </List.Item>
                )}
            />          
        </div>
    );
}

export default MainList;
