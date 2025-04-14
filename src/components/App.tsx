import React, { CSSProperties, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionItemsList from "./ActionItemsAndListsComponents/ActionItemsList";
import { RootState } from "../store";
import { IActionItemsList } from "../utils/types";
import AddActionButton from "./ActionButton/AddActionButton";

const styles: { splitColumnContainer: CSSProperties } = {
  splitColumnContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 300px)",
    gap: "100px",
    overflowX: "auto",
  },
};

const ListsContext = createContext({
  lists: [] as IActionItemsList[],
});

const App = () => {
  const lists = useSelector((state: RootState) => state.actions);

  return (
    <ListsContext.Provider value={{ lists }}>
      <div>
        <header
          style={{
            textAlign: "center",
            margin: "0px",
            width: "100%",
            height: "100px",
            backgroundColor: "#3A59D1",
          }}
        >
          <h1
            style={{
              justifyContent: "center",
              padding: "30px",
              color: "#f0f0f0",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Let's ace this!
          </h1>
        </header>

        <div style={styles.splitColumnContainer}>
          {lists.map((list) => (
            <div key={`list#${list.id}`}>
              <ActionItemsList
                id={list.id}
                title={list.title}
                actions={list.actions}
                key={list.id}
              />
            </div>
          ))}

          <div style={{ margin: "20px", padding: "30px", width: "300px" }}>
            <AddActionButton id={undefined} />
          </div>
        </div>
      </div>
    </ListsContext.Provider>
  );
};

export { ListsContext, App };
