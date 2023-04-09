import React, { useState } from 'react';
import { Button, Modal, Input, message, Form, Avatar } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/user-slice';

const LoginModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [loginForm] = Form.useForm();
    const dispatch = useDispatch();
    
    const handleOpen = () => {
        setOpen(true);
    }
    const handleCancel = () => {
        setOpen(false);
    }

    const handleLogin = (values: {id:string, password:string}):void => {
        dispatch(userLogin(values.id));
        setOpen(false);
        messageApi
            .open({
                type: 'success',
                content: ' 로그인 되었습니다.',
                duration: 3,
            });
    };

    return(
        <>
            {contextHolder}
            <Button style={{ marginRight: 10 }} onClick={handleOpen}>로그인</Button>
            <Modal
                open={open}
                style={{ padding: 0 }}
                centered
                title={
                    <>
                        <Avatar 
                            style={{ marginRight: 15, marginBottom: 10 }}
                            size={50} 
                            src="https://ih1.redbubble.net/image.438018541.2151/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" 
                        />
                        <span className='header'>CODING HUB</span>
                    </>
                }
                onCancel={handleCancel}
                footer={[]}
            >
                <Form
                    form={loginForm}
                    layout='vertical'
                    style={{ maxWidth: 700 }}
                    onFinish={handleLogin}
                    autoComplete='off'
                >
                    <Form.Item
                        name='id'
                        rules={[{
                            min: 3, max: 30, whitespace: true, message: ' 아이디를 확인하세요 . ',
                        }]}
                    >
                        <Input placeholder='아이디' prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                        name='password'rules={[{
                            min: 3, max: 30, whitespace: true, message: ' 비밀번호를 확인하세요 . ',
                        }]}
                    >
                        <Input.Password placeholder='비밀번호' prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item>
                        <Button block htmlType='submit' type='primary'>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default LoginModal;