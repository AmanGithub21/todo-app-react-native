import { useState } from "react";

function useHandleChange(initialValue) {
  const [state, setState] = useState(initialValue);
  const handleChange = (e) => setState(e.target.value);
  return [state, handleChange];
}

export default useHandleChange;
