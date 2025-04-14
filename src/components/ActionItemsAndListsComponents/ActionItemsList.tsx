import React from "react";
import ActionItem from "./ActionItem";
import { Space, Typography, Tooltip, Divider } from "antd";
import { CSSProperties } from "react";
import { IActionItemsList } from "../../utils/types";
import { CloseCircleOutlined, UnorderedListOutlined } from "@ant-design/icons";
import AddActionButton from "../ActionButton/AddActionButton";
import { useDispatch } from "react-redux";
import {
  removeActionListItem,
  updateActionListItem,
} from "../../store/slices/actionSlice";

import {
  closestCorners,
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { rectSwappingStrategy, SortableContext } from "@dnd-kit/sortable";
import { rearrangemenentFn } from "../../utils/draggables";

const { Title } = Typography;

const styles: { container: CSSProperties } = {
  container: {
    width: "300px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    backgroundColor: "#3D90D7",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "50px",
    paddingBottom: "30px",
    touchAction: "none",
  },
};

const ActionItemsList = ({ id, title, actions }: IActionItemsList) => {
  const dispatch = useDispatch();

  const removeList = () => {
    id &&
      dispatch(
        removeActionListItem({
          id,
        })
      );
  };

  const handleDragEnd = (
    event: import("@dnd-kit/core").DragEndEvent,
    actions: IActionItemsList[]
  ) => {
    const rearangedList = rearrangemenentFn(event, actions);
    dispatch(updateActionListItem({ id, actions: rearangedList }));
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 1 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 100, tolerance: 1 },
    })
  );

  return (
    <div style={styles.container}>
      <Title
        style={{
          color: "#f0f0f0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
        level={5}
      >
        <UnorderedListOutlined />
        {title}
        <Tooltip title="Remove list" placement="topRight" color="cyan">
          <CloseCircleOutlined
            style={{ color: "#f0f0f0" }}
            onClick={() => removeList()}
          />
        </Tooltip>
      </Title>
      <Divider style={{ backgroundColor: "#f0f0f0" }} />
      <Space direction="vertical" size={12}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={(event) => handleDragEnd(event, actions ?? [])}
        >
          <SortableContext
            items={actions ?? []}
            strategy={rectSwappingStrategy}
          >
            {actions?.map((action) => {
              return (
                <ActionItem
                  key={action.id}
                  content={action.content}
                  completed={action.completed}
                  id={action.id}
                  parentListId={id}
                />
              );
            })}
          </SortableContext>
        </DndContext>
      </Space>
      <AddActionButton id={id} />
    </div>
  );
};

export default ActionItemsList;
