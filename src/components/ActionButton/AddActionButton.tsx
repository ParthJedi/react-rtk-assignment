import React, { useState } from "react";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import NewActionListForm from "../ActionForms/NewActionListForm";
import NewActionItemForm from "../ActionForms/NewActionItemForm";

const AddActionButton = ({ id }: { id: string | undefined }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormToggle = () => {
    setIsOpen(!isOpen);
  };

  const buttonText = isOpen
    ? "Close"
    : !id
    ? "Add New List"
    : "Add New Action Item";

  return (
    <>
      <Button
        style={{ marginBottom: "10px", width: "100%" }}
        color="cyan"
        variant="solid"
        onClick={handleFormToggle}
        icon={isOpen ? <CloseOutlined /> : <PlusOutlined />}
      >
        {buttonText}
      </Button>
      <Space direction="vertical" size={12} style={{ width: "300px" }}>
        {isOpen ? (
          <Card style={{ width: "300px" }}>
            {!id ? (
              <NewActionListForm handleFormToggle={handleFormToggle} />
            ) : (
              <NewActionItemForm
                parentListId={id}
                handleFormToggle={handleFormToggle}
              />
            )}
          </Card>
        ) : null}
      </Space>
    </>
  );
};

export default AddActionButton;
