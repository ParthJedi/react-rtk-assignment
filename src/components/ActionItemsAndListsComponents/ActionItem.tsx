import React, { useState } from "react";
import { Card, Input, Space, Switch, Tooltip } from "antd";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  removeActionItem,
  updateActionItem,
} from "../../store/slices/actionSlice";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ActionItem = ({
  content = "Placeholder Content",
  completed = false,
  id,
  parentListId,
}: {
  content?: string;
  completed?: boolean;
  id: string;
  parentListId?: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(content);
  const [status, setStatus] = useState(completed);
  const dispatch = useDispatch();

  const editItem = () => {
    setIsEditing(!isEditing);
  };
  const removeIem = () => {
    dispatch(removeActionItem({ id, parentListId }));
  };

  const handleEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (newValue !== content) {
      dispatch(updateActionItem({ id, parentListId, content: newValue }));
    }
  };

  const handleStatus = () => {
    dispatch(updateActionItem({ id, parentListId, completed: !status }));
    setStatus(!status);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: 1,
  };

  const { TextArea } = Input;

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Card
        style={{
          width: 300,
          height: isEditing ? 120 : 100,
          padding: isEditing ? 10 : 0,
          margin: 10,
          border: status ? "2px solid red" : "none",
        }}
      >
        {!isEditing ? (
          <p>{content}</p>
        ) : (
          <TextArea
            defaultValue={content}
            onChange={(e) => handleEdit(e)}
            onBlur={handleBlur}
          />
        )}
        <span style={{ position: "absolute", right: "10px", top: "10px" }}>
          <Tooltip
            title={completed ? "Undo" : "Mark as complete"}
            placement="top"
            color="cyan"
          >
            <Switch size="small" defaultValue={status} onClick={handleStatus} />
          </Tooltip>
        </span>
        <span
          style={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
            color: "gray",
          }}
        >
          <Tooltip title="Remove item" placement="topRight" color="cyan">
            <CloseCircleOutlined
              style={{ width: "20px", height: "20px" }}
              onClick={() => removeIem()}
            />
          </Tooltip>
          <Tooltip title="Edit item" placement="top" color="cyan">
            <EditOutlined
              style={{ width: "20px", height: "20px" }}
              onClick={editItem}
            />
          </Tooltip>
        </span>
      </Card>
    </div>
  );
};

export default React.memo(ActionItem);
