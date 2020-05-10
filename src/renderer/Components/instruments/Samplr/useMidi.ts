import * as React from "react"

const useMidi = () => {
    React.useEffect(() => {
        if (navigator["requestMIDIAccess"]) {
            console.log('This browser supports WebMIDI!');
        } else {
            console.log('WebMIDI is not supported in this browser.');
        }
    }, [])
}

export default useMidi