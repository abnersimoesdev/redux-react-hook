import { css } from "emotion";
import * as React from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { AppStateType } from "../store/reducers/types";
import { deleteTodo } from "../store/actions";

export default function TodoItem({ index }: { index: number }) {
  const mapState = React.useCallback(
    (state: AppStateType) => state.todos[index],
    [index]
  );
  const todo = useMappedState(mapState);

  const dispatch = useDispatch();
  const onDelete = React.useCallback(() => dispatch(deleteTodo(index)), [
    dispatch,
    index
  ]);

  return (
    <li className={styles.root}>
      <span>{todo}</span>
      <button onClick={onDelete}>Delete</button>
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
