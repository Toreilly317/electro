import { useRef } from "react"
import { Meter } from "tone"

const useMeter = (smoothing = 0.8) => {
    const meter = useRef(new Meter(smoothing)).current
}