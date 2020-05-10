import * as React from "react";
import styled from "styled-components";
import Button from "./Button";

const BrowserButtonStyles = styled.div<{ active: boolean }>`
  input {
    cursor: pointer;
  }

  .upload-btn-wrapper {
    position: relative;
    display: flex;
    overflow: hidden;
    /* display: inline-block; */
  }

  input {
    display: inline-block;
    position: absolute;
    bottom: -1px;

    opacity: 0;
    border-radius: 2px;
    border: 0;
    outline: 0;
    /* keeping the height at 0 allows the pointer to work properly */
    height: 200%;
    max-width: 100%;

    flex: 1 1 0;
    align-content: center;

    cursor: pointer;
  }
`;

interface BrowserButtonProps {
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileBowserButton: React.FC<BrowserButtonProps> = ({ onChange }) => {
  const [active] = React.useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <BrowserButtonStyles active={active}>
      <div className="upload-btn-wrapper">
        <Button onClick={() => console.log("browse")}>Browse</Button>
        <input title="" type="file" name="myfile" onChange={handleOnChange} />
      </div>
    </BrowserButtonStyles>
  );
};

export default FileBowserButton;
