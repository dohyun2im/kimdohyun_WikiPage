import React from 'react';
import { Avatar, Row } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WikiModal from './wiki-modal';

const WikiDetail = () => {
    const wiki = useSelector((state:any) => state.wiki.wikiColumns);
    const { id } = useParams();
    const filteredWiki = wiki.filter((item:any) => item.key === Number(id))[0];
    const prevWiki = wiki.filter((item:any) => item.key === Number(id) - 1)[0];
    const nextWiki = wiki.filter((item:any) => item.key === Number(id) + 1)[0];
    
    return (
        <div>
            {prevWiki &&
                <div className='next-prev' style={{ marginTop: 7 }}>
                    <Link to={`/wiki/detail/${prevWiki.key}`}>
                        <h3 className='next-prev-header'>
                            <LeftCircleOutlined />
                            {'  '}
                            이전 글
                        </h3>
                        <h6 className='next-prev-title'>
                            {prevWiki.title}
                        </h6>
                    </Link>
                </div>
            }
            
            <Row className='wiki-detail-header' align='middle'>
                <Avatar size={80} src={filteredWiki.avatar} style={{ border: '2px solid lightgray'}}/>
                <h1>{filteredWiki.title}</h1>
            </Row>

            <WikiModal lastWiki={wiki?.length} wikiUpdate={filteredWiki} />
            
            <div 
                className='wiki-detail-content' 
                dangerouslySetInnerHTML={{ __html: filteredWiki.content.replace(/\n/g, '<br />') }}
            />
            
            {nextWiki &&
                <div className='next-prev'>
                    <Link to={`/wiki/detail/${nextWiki?.key}`}>
                        <h3 className='next-prev-header'>
                            다음 글
                            {'  '}
                            <RightCircleOutlined />
                        </h3>
                        <h6 className='next-prev-title'>
                            {nextWiki.title}
                        </h6>
                    </Link>
                </div>
            }                   
        </div>
    );
}

export default WikiDetail;

