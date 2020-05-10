export const midiNoteToFreq = (note: number) => {
    const tuning = 440
    return note === 0 || (note > 0 && note < 128) ? Math.pow(2, (note - 69) / 12) * tuning : null
}