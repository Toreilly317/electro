import * as React from "react";

interface CountState {
    count: number;
}

interface AddSampleAction {
    type: "ADD_SAMPLE";
}

interface RemoveSampleAction {
    type: "REMOVE_SAMPLE";
}

interface ResetSampleBankAction {
    type: "RESET_SAMPLE_BANK";
    payload: CountState;
}

type SampleBankActions =
    | AddSampleAction
    | RemoveSampleAction
    | ResetSampleBankAction;

function reducer(state: CountState, action: SampleBankActions) {
    switch (action.type) {
        case "ADD_SAMPLE":
            return { count: state.count + 1 };
        case "REMOVE_SAMPLE":
            return { count: state.count - 1 };
        case "RESET_SAMPLE_BANK":
            return { count: 0 };
        default:
            throw new Error();
    }
}



export default reducer;
