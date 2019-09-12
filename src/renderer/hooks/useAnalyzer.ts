import * as React from "react";
import {useOnMount} from "./lifecycles"

const useAnalyzer = (audio) => {

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  const source = audioContext.createMediaStreamSource(props.audio);
  const source.connect(analyser);
  const rafId = requestAnimationFrame(.tick);

  const tick = () => {
    analyser.getByteTimeDomainData(dataArray);
    setState({ audioData: dataArray });
    rafId = requestAnimationFrame(tick);
  }
  

};

export default useAnalyzer;


import React, { Component } from 'react';
import AudioVisualiser from './AudioVisualiser';

class AudioAnalyser extends Component {
  constructor(props) {
    super(props);
    this.state = { audioData: new Uint8Array(0) };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    
  }



  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }

  render() {
    return <AudioVisualiser audioData={ this.state.audioData } />;
  }
}

export default AudioAnalyser;