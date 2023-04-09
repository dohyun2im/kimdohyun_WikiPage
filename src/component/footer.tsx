import React from 'react';
import { Popover, Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const CustomFooter = () => {
    const content = (
        <a href='https://open.kakao.com/o/sqysw5df' target="_blank" rel="noopener noreferrer">
            <Button block>
                <MessageOutlined />
                문의하기
            </Button>
        </a>
    );

    return (
        <>
            <div 
                style={{ 
                    textAlign: 'center',
                    backgroundColor:'white',
                    position: 'fixed',
                    bottom: 3,
                    right: 3,
                }}
            >
            ©2023 Created by Dohyun Kim
            </div>
            <div>
                <Popover title='문의사항을 남기세요 !' content={content}>
                    <img 
                        className='bot-img' 
                        src='https://img.freepik.com/vector-premium/icono-robot-diseno-signo-bot-concepto-simbolo-chatbot-servicio-soporte-voz-bot-bot-soporte-linea-vector-stock-ilustracion_100456-34.jpg' 
                        alt='chatbot' 
                    />                     
                </Popover>
            </div>       
        </>
  );
}

export default React.memo(CustomFooter);