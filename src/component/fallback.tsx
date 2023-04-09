import React from 'react';
import { Result } from 'antd';
import { MehTwoTone } from '@ant-design/icons';
import { FallbackProps } from 'react-error-boundary';

const Fallback: React.FC<FallbackProps> = ({ error }) => (
    <>
        <div style={{ marginTop: 150, display: 'flex' }}>
            <div style={{ display: 'flex', margin: '0 auto' }}>
                <MehTwoTone style={{ fontSize: 35, marginRight: 15 }} twoToneColor='#ff603b' />
                <h1> Error Page . . . </h1>
            </div>
        </div>
        <Result
            status='500'
            title={error?.message !== null ? error?.message : ' 예기치 못한 에러가 발생했습니다 ! '}
            subTitle=' 담당자에게 문의하세요. '
        />
    </>
);

export default Fallback;