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
      title={`Booking Summary`}
      destroyOnClose
      afterClose={handleCloseModal}
      onOk={() => {}}
      onCancel={handleCloseModal}
      okText={`Confirm`}
      okType="danger"
    >
        <div className="confirm-seat-info">
            {renderSeatInfo()}
        </div>
    </Modal>
  );
}
