import * as React from "react"
import styled from "styled-components"

const Slider = styled.div`
  @import url(https:fonts.googleapis.com/css?family=VT323);
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    background: #222;
    //background: url("http:subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/purty_wood.png") repeat center center;
    //background: url("http:subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dark_wood.png");

    color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mixer {
     padding: 1.5rem 1rem;
     border-radius: .5rem;
     background:
       linear-gradient(180deg,
         rgba(20,20,20,.9) 0%,
         rgba(255,255,255,.25) 3%,
         rgba(0,0,0,.25) 3%,
         transparent 97%,
         rgba(0,0,0,.9) 98%,
         rgba(0,0,0,.9) 100%
       ),
       #555;
       box-shadow:
         0 0 10px 5px rgba(255,255,255,.125) inset,
         0 -2px 2px 2px rgba(0,0,0,.75) inset,
         0 20px 30px 0 rgba(0,0,0,.75);

    display: flex;
  }
  .channelstrip {
    user-select: none;

    background: rgb(50, 50, 50);
    box-shadow: 0 0 0 2px rgba(100, 100, 100, 1);
    border-radius: 4px;
    padding: 0.25rem;
    margin: 0.25rem;
    width: 4rem;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    .label {
      font-family: "VT323";
      font-size: 0.75rem;
      text-transform: uppercase;
      display: block;
      background: #122;
      border-radius: 1px;
      box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.05),
        0 3px 10px 5px rgba(0, 0, 0, 0.8) inset,
        0 5px 10px 5px rgba(20, 30, 40, 0.5) inset,
        0 0 0 1px rgba(0, 0, 0, 0.75);
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-shadow: 0 0 20px rgba(200, 255, 200, 0.75);
      color: rgba(0, 0, 0, 0.8);
      text-align: center;
      padding: 0 0.5rem;
      position: relative;
      overflow: hidden;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: linear-gradient(
          -10deg,
          transparent 10%,
          rgba(255, 255, 255, 0.1) 60%,
          transparent 62%,
          transparent
        );
      }
    }
    .fader {
      position: relative;
      flex-grow: 1;
      margin: 3rem 0 3rem 0;
      .fader-track {
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        width: 0.25rem;
        left: 50%;
        margin-left: -0.125rem;
        background: rgb(0, 0, 0);
        border: none;
        border-radius: 5px;
        box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.25) inset;
      }
      .scale-tick {
        position: absolute;
        left: 50%;
        opacity: 0.5;
        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: -1.5rem;
          width: 1rem;
          height: 1px;
          background: rgb(200, 200, 200);
        }
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0.5rem;
          width: 1rem;
          height: 1px;
          background: rgb(200, 200, 200);
        }
        &:last-child:after,
        &:last-child:before,
        &:first-child:after,
        &:first-child:before {
          height: 2px;
        }
        &:last-child:after {
          content: "0";
          font-size: 0.5rem;
          white-space: nowrap;
          width: 0.6rem;
          text-indent: 0.8rem;
          line-height: 0;
          color: rgb(200, 200, 200);
        }

        &:nth-child(2),
        &:nth-child(4) {
          display: none;
        }
      }
      .fader-thumb {
        position: absolute;
        z-index: 1;
        border: none;
        height: 4rem;
        width: 2rem;
        left: 50%;
        margin-left: -1rem;
        margin-top: -2rem;
        border-radius: 0px;

        cursor: move;
        user-select: none;

        background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 5px,
            rgba(0, 0, 0, 1) 6px
          ),
          linear-gradient(
            0deg,
            rgb(70, 70, 70) 0%,
            rgb(90, 90, 90) 14%,
            rgb(20, 20, 20) 15%,
            rgb(20, 20, 20) 50%,
            rgb(90, 90, 90) 84%,
            rgb(20, 20, 20) 85%,
            rgb(30, 30, 30) 100%
          );
        box-shadow: 
        0 0 0 2px rgba(0,0,0,.25) inset, 0 0.25rem 0.5rem
          0 rgba(0, 0, 0, 0.5);

        &:after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          margin-top: -1px;
          height: 3px;
          background: rgba(255, 255, 255, 0.75);
        }
      }
    }

    .horizontal-meter {
      height: 0.5rem;
      margin-top: 0.5rem;
      background: #000;
      border-radius: 1px;
      box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.05),
        0 3px 5px 1px rgba(0, 0, 0, 0.8) inset,
        0 5px 30px 0 rgba(255, 255, 255, 0.25) inset,
        0 0 0 1px rgba(0, 0, 0, 0.75);
      position: relative;

      .activity {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 2px,
            rgba(0, 0, 0, 1) 2px,
            transparent 3px,
            transparent 3px
          ),
          linear-gradient(
            90deg,
            rgb(0, 255, 0),
            rgb(0, 255, 0) 70%,
            rgb(255, 255, 0) 70%,
            rgb(255, 255, 0) 90%,
            rgb(255, 0, 0) 90%
          );
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.8) inset,
          0 -1px 2px 1px rgba(0, 0, 0, 0.8) inset;
      }
    }

    button {
      text-transform: uppercase;
      border-radius: 5rem;
      background: linear-gradient(
        180deg,
        rgb(255, 255, 255) 0%,
        rgb(200, 200, 200) 5%,
        rgb(150, 150, 150) 20%,
        rgb(180, 180, 180) 95%
      );
      box-shadow: 0 -3px 1px 0 rgba(0, 0, 0, 0.5) inset,
        0 0 1px 2px rgba(255, 255, 255, 0.5) inset,
        0 2px 10px 0 rgba(0, 0, 0, 0.125);
      border: none;
      font-size: 0.75rem;
      height: 30px;
      color: black;
      font-weight: bold;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.75);
      padding: 0;
      &:focus {
        outline: none;
      }

      &:active {
        height: 28px;
        margin-top: 2px;
        background: linear-gradient(
          0deg,
          rgb(255, 255, 255) 0%,
          rgb(200, 200, 200) 5%,
          rgb(150, 150, 150) 20%,
          rgb(180, 180, 180) 95%
        );
        box-shadow: 0 -2px 1px 0 rgba(0, 0, 0, 0.5) inset,
          0 0 1px 2px rgba(255, 255, 255, 0.5) inset,
          0 2px 10px 0 rgba(0, 0, 0, 0.125);
        padding-top: 2px;
      }

      &:active {
        background: linear-gradient(
          0deg,
          rgb(255, 80, 80) 5%,
          rgb(240, 10, 10) 95%,
          rgb(200, 100, 100) 100%
        );
        box-shadow: 0 -3px 1px 0 rgba(0, 0, 0, 0.5) inset,
          0 0 1px 2px rgba(255, 255, 255, 0.25) inset,
          0 2px 10px 0 rgba(0, 0, 0, 0.125), 0 0 10px 0 rgba(255, 0, 0, 1);
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
          0 0 20px rgba(255, 200, 100, 1);
      }
    }

    button.solo {
      &:active {
        height: 28px;
        margin-top: 2px;
        background: linear-gradient(
          0deg,
          rgb(255, 255, 255) 0%,
          rgb(200, 200, 200) 5%,
          rgb(180, 180, 180) 95%
        );
        box-shadow: 0 -2px 1px 0 rgba(0, 0, 0, 0.5) inset,
          0 0 1px 2px rgba(255, 255, 255, 0.5) inset,
          0 2px 10px 0 rgba(0, 0, 0, 0.5);
        padding-top: 2px;
      }

      &:active {
        background: linear-gradient(
          0deg,
          rgb(80, 200, 255) 5%,
          rgb(10, 80, 240) 95%,
          rgb(100, 150, 200) 100%
        );
        box-shadow: 0 -3px 1px 0 rgba(0, 0, 0, 0.5) inset,
          0 0 1px 2px rgba(255, 255, 255, 0.25) inset,
          0 2px 10px 0 rgba(0, 0, 0, 0.5), 0 0 10px 0 rgba(0, 200, 255, 1);
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
          0 0 20px rgba(0, 200, 255, 1);
      }
    }

    button {
      position: relative;
      top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`


/**
 * Constructor
 * @param {Number} minValue
 * @param {Number} maxValue
 */
const LogScale = (minValue, maxValue) => {
  this.minValue = minValue;
  this.maxValue = maxValue;
}

/**
 * Gets the range between the min and max values
 * @returns {Number}
 */
const getRange = () => {
  return this.maxValue - this.minValue;
};

/** 
 * Maps linear 0-1 point to logarithmic scale between min and max
 * f(0) = minValue
 * f(1) = maxValue
 * f(x) = (range + 1)^x + minValue
 * @param linearValue {Number} from 0 to 1 in linear scale
 * @returns {Number} between min and max inclusive
 */
const linearToLogarithmic =  (linearValue) => {
  const value = Math.round(Math.pow(this.getRange() + 1, linearValue) + this.minValue - 1);

  if (value < this.minValue) {
    value = this.minValue;
  } else if (value > this.maxValue) {
    value = this.maxValue;
  }

  return value;
},

  /** 
   * Maps a logarithmic value to a fractional point between 0-1 on the scale
   * g(minValue) = 0
   * g(maxValue) = 1
   * g(x) = log(base range + 1)(x)
   * @param value {Number}
   * @returns {Number} 0 to 1
   */
  const logarithmicToLinear = (value) => {
    var normalizedValue = value - this.minValue + 1;

    if (normalizedValue <= 0) {
      return 0;
    } else if (value >= this.maxValue) {
      return 1;
    } else {
      return Math.log(normalizedValue) / Math.log(this.getRange() + 1);
    }
  }


const Mixer = () => {
  return (
    <div id="mixer-template">
      <div class="mixer">
        <channel-strip color="#0f0" label="Channel 1" mute=""></channel-strip>
        <channel-strip color="#0ff" label="Channel 2" solo=""></channel-strip>
        <channel-strip color="#ff0" label="Channel 3"></channel-strip>
      </div>
    </div> 
    
    <div>id="channel-strip-template">
      <div class="channelstrip">
        <div class="label" v-bind: style="{color: color }">
      {{ label }}
      </div>
      <div class="horizontal-meter">
        <div class="activity" v-el: meter=""></div>
    </div>
    <button v-bind: class="{&#39;active&#39;: mute === true}" v-on: onClick={toggleMute}>Mute</button> 
    <button class="solo" v-bind: class="{&#39;active&#39;: solo === true}" v-on: click="toggleSolo">Solo</button> 
    <fader></fader>
  </div >
</div > 
<div id="fader-template">
  <div class="fader">
    <div class="fader-track" v-el: track="">
      <div class="fader-thumb" v-bind: style="{top: faderTop + &#39;px&#39; }" v-el:handle="" v-on:mousedown="onMouseDown" v-touch-options:pan="{direction: &#39;vertical&#39;, threshold: 1 }" v-touch:pan="onPan"></div>
    </div>
  <div class="scale">
    <div class="scale-tick" track-by="$index" v-bind: style="{bottom: p + &#39;%&#39; }" v-for="p in scalePositions"></div>
    </div>
  </div >
</div >
  )
}