import React, { useContext, useState } from "react";
import { IActionItemsList } from "../../utils/types";
import { Button, Form, Input } from "antd";
import { ListsContext } from "../App";
import { useDispatch } from "react-redux";
import { addActionListItem } from "../../store/slices/actionSlice";
import { v4 as uuidv4 } from "uuid";

const NewActionListForm = ({
  handleFormToggle,
}: {
  handleFormToggle: () => void;
}) => {
  const dispatch = useDispatch();
  const { lists } = useContext(ListsContext);
  const [formData, setFormData] = useState({
    title: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    actions: [] as IActionItemsList[],
    id: uuidv4(),
  });

  const handleSubmit = () => {
    console.log("Form Data", formData, lists);
    dispatch(addActionListItem(formData));
    handleFormToggle();
  };

  const placeholderText = lists
    ? "Enter list title"
    : "Enter action item title";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Form name="addActionForm" layout="vertical">
        <Form.Item label="Enter Title" name="titleField">
          <Input
            name="title"
            onChange={(e) => handleChange(e)}
            value={formData.title}
            placeholder={placeholderText}
            autoFocus
          />
        </Form.Item>
        <Form.Item label={null}>
          <Button
            type="primary"
            disabled={!formData.title.length}
            htmlType="submit"
            onClick={handleSubmit}
          >
            Add List
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewActionListForm;
