import React, { useContext, useState } from "react";
import { Button, Form, Input } from "antd";
import { ListsContext } from "../App";
import { useDispatch } from "react-redux";
import { addActionItem } from "../../store/slices/actionSlice";
import { v4 as uuidv4 } from "uuid";

const NewActionItemForm = ({
  handleFormToggle,
  parentListId,
}: {
  parentListId: string | undefined;
  handleFormToggle: () => void;
}) => {
  const dispatch = useDispatch();
  const { lists } = useContext(ListsContext);
  const [formData, setFormData] = useState({
    content: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completed: false,
    id: uuidv4(),
    parentListId: parentListId,
  });
  const { TextArea } = Input;

  const handleSubmit = () => {
    console.log("Form Data & id", formData, parentListId, lists);
    dispatch(addActionItem(formData));
    handleFormToggle();
  };

  const placeholderText = "Enter item description...";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Form name="addActionForm" layout="vertical">
        <Form.Item label="Enter item description" name="content">
          <TextArea
            name="content"
            onChange={(e) => handleChange(e)}
            value={formData.content}
            placeholder={placeholderText}
            autoSize={{ minRows: 2, maxRows: 6 }}
            autoFocus
          />
        </Form.Item>
        <Form.Item label={null}>
          <Button
            type="primary"
            disabled={!formData.content.length}
            htmlType="submit"
            onClick={handleSubmit}
          >
            Add Item
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewActionItemForm;
