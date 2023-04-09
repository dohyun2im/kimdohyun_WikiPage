import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Avatar, Row, Button, Input } from "antd";
import { HomeTwoTone, BulbTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./login-modal";
import { userLogout } from "../store/user-slice";

interface HeaderMenu {
    key: string,
    label: string,
    icon: JSX.Element,
}

const CustomHeader = () => {
    const { name } = useSelector((state:any) => state.user);
    const dispatch = useDispatch();

    const menuInstance:HeaderMenu[] = [
        {
            key: '/',
            label: 'Home',
            icon: <HomeTwoTone style={{ fontSize: 24 }} twoToneColor="#E0B88A"/>,
        },
        {
            key: '/wiki',
            label: 'Wiki',
            icon: <BulbTwoTone style={{ fontSize: 24 }} twoToneColor="#FFB400" />,
        },
    ];

    const navigate = useNavigate();

    const onMenuClick = useCallback((e: any): void => {
        navigate(e.key);
    }, [navigate]);

    const homeClick = useCallback(():void => {
        navigate('/');
    }, [navigate]);

    const handleLogOut = useCallback(():void => {
        dispatch(userLogout());      
    },[dispatch]);

    return(
        <Row
            justify='space-between'
            align='middle'
            style={{ 
                backgroundColor: 'white',
                borderBottom: '3px solid #eee',
                position: 'sticky', 
                top: 0, 
                zIndex: 1, 
                width: '100%',
            }}
        >
            <Row align='middle'>
                <Avatar 
                    style={{ marginLeft: 5 }}
                    size={50} 
                    src="https://ih1.redbubble.net/image.438018541.2151/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" 
                />
                <h2 onClick={homeClick} className="header-title">
                    CODING HUB
                </h2>          
                <Menu
                    mode='horizontal'
                    items={menuInstance}
                    onClick={onMenuClick}
                    style={{ backgroundColor: 'white', border: 'none' }}
                />
            </Row>
            <Row align='middle'>
                <Input.Search style={{ width: 150, marginRight: 5 }} />
                { name === '' ? 
                    (
                        <>
                            <LoginModal />
                            <Button style={{ marginRight: 15 }} type='primary'>회원가입</Button>
                        </>
                    ) : 
                    (
                        <>
                            <span style={{ marginRight: 10 }}>{name}님 안녕하세요 ! </span>
                            <Button style={{ marginRight: 15 }} type='primary' onClick={handleLogOut}>로그아웃</Button>
                        </>
                    )
                }
            </Row>
        </Row>
    )
}

export default React.memo(CustomHeader);