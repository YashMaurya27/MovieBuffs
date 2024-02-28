import { Modal } from "antd";
import React from "react";

export default function Confirmation(props) {
  const handleCloseModal = () => {
    props.setOpen(false);
  };

  const renderSeatInfo = () => {
    const section = [];
    const priceSectionMapping = {};
    Object.keys(props.sections).map((section) => {
        const { price } = props.sections[section];
        if(!priceSectionMapping?.[price]) {
            priceSectionMapping[price] = section;
        }
    });
    console.log('mapping', priceSectionMapping);
    section.push(
        <div>
            <p>
                {}
            </p>
        </div>
    )
    return <></>
  };

  return (
    <Modal
      open={props.open}
      closeIcon
      width={800}
      closable
      title={`Booking Confirmation`}
      destroyOnClose
      afterClose={handleCloseModal}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      okText={`Okay`}
      okType="danger"
    >
        <div className="confirm-seat-info">
            <p>Congratulations! Your tickets have been booked</p>
        </div>
    </Modal>
  );
}
