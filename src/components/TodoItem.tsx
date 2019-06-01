import { css } from "emotion";
import * as React from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { IStateInterface } from "../store";

export default function TodoItem({ index }: { index: number }) {
  const mapState = React.useCallback(
    (state: IStateInterface) => state.todos[index],
    [index]
  );
  const todo = useMappedState(mapState);

  const dispatch = useDispatch();
  const deleteTodo = React.useCallback(
    () => dispatch({ type: "delete todo", index }),
    [dispatch, index]
  );

  return (
    <li className={styles.root}>
      <span>{todo}</span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

const styles = {
  root: css`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;

    &:hover {
      background-color: #efefef;

      button {
        display: block;
      }
    }

    button {
      display: none;
    }
  `
};
