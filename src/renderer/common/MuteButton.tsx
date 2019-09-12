import * as React from "react";
import styled from "styled-components";
import useToggle from "../hooks/useToggle";

const MuteButton = styled.button`
  background: ${props => (props.isMute ? "red" : "white")};
  color: black;
`;

const MuteBtn = ({ onClick }) => {
  const [isMute, toggleMute] = useToggle(false);
  React.useEffect(() => {
    console.log("OnMount", isMute);
  }, []);

  const handleOnClick = () => {
    toggleMute();
    console.log(isMute);
  };

  return (
    <MuteButton isMute={isMute} onClick={handleOnClick}>
      Mute
    </MuteButton>
  );
};

export default MuteBtn;
