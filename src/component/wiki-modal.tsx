import React, { useState } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { addWiki, updateWiki } from '../store/wiki-slice';
import { useDispatch } from 'react-redux';
import TextArea from 'antd/es/input/TextArea';

interface Props {
    lastWiki: number;
    wikiUpdate?: any;
}

const WikiModal = (prop:Props) => {
  const { lastWiki, wikiUpdate } = prop;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [modalForm] = Form.useForm();
  const dispatch = useDispatch();

  const showModal = ():void => {
    setIsModalOpen(true);
  };

  const handleOk = (e:any):void => {
    if (e.title?.trim() === '' || e.title === null || e.title === undefined || 
        e.content?.trim() === '' || e.content === undefined || e.content === null){
      messageApi.open({
        type: 'error',
        content: '제목이나 글을 작성 해주세요.',
        duration: 3,
      });
      return;
    }
    if (wikiUpdate) {
      dispatch(updateWiki(
        wikiUpdate.key,
        e.title,
        wikiUpdate.avatar,
        e.content,
      ));
      setIsModalOpen(false);
      return;
    }
    dispatch(addWiki(
        e.title,
        `https://joesch.moe/api/v1/random?key=${lastWiki+1}`,
        e.content,
    ));
    messageApi.open({
      type: 'success',
      content: wikiUpdate? '수정 되었습니다.' : '작성 되었습니다.',
      duration: 3,
    });
    setIsModalOpen(false);
    modalForm.resetFields();
  };

  const handleCancel = ():void => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Button icon={<EditOutlined />} onClick={showModal}>
        {wikiUpdate ? '수정':'글 추가'}
      </Button>
      
      <Modal 
        title={wikiUpdate ? '위키 수정하기':'위키 작성하기'}
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
            form={modalForm}
            style={{ marginTop: 10 }}
            onFinish={handleOk}
            autoComplete='off'
        >
            <Form.Item
                label='위키 제목'
                name='title'
                initialValue={wikiUpdate ? wikiUpdate.title : null}
                rules={[{
                    min: 3, max: 30, whitespace: true, message: ' 제목을 확인하세요 . ',
                }]}
            >
                <Input placeholder={wikiUpdate ? wikiUpdate.title : null}/>
            </Form.Item>

            <Form.Item
                label='위키 내용'
                name='content'
                initialValue={wikiUpdate ? wikiUpdate.content : null}
                rules={[{
                    min: 3, max: 455, whitespace: true, message: ' 내용을 확인하세요 . ',
                }]}
            >
                <TextArea rows={5} placeholder={wikiUpdate ? wikiUpdate.content : null}/>
            </Form.Item>

            <Button block type='primary' htmlType='submit'>
              {wikiUpdate ? '수정':'등록'}
            </Button>
        </Form>
      </Modal>
    </>
  );
}

export default WikiModal;