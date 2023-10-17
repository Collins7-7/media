import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";

export const useThunk = (thunk) => {
  const dispatch = useDispatch();

  const [loadCreate, setLoadCreate] = useState(false);
  const [error, setError] = useState(null);

  const runThunk = useCallback(
    (arg) => {
      setLoadCreate(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setLoadCreate(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, loadCreate, error];
};
