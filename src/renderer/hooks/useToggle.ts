import { useState } from "react";

export const useToggle = (intialValue: boolean) => {
    const [state, setState] = useState(intialValue);
    const toggle = () => setState(!state);

    return [state, () => toggle()];
};
