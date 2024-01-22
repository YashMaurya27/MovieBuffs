import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
const MyDrawer = ({
    openDrawer,
    setOpenDrawer,
    ...props
}) => {
//   const [open, setOpen] = useState(true);
  const [placement, setPlacement] = useState('left');
//   const showDrawer = () => {
//     setOpen(true);
//   };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      {/* <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space> */}
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={openDrawer}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default MyDrawer;