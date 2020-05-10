import * as React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 8px solid black;
  margin-bottom: 0.5rem;

  .container {
    display: flex;
  }

  img {
    border: 4px solid black;
    box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.5);
    height: 75px;
    width: 75px;
    border-radius: 100%;
  }

  ul {
    display: flex;
    font-size: 1.5rem;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 1rem;
    }

    figure {
      display: inline-block;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderStyles>
      <div>
        <figure>
          <img
            src="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg"
            alt="user Avatar."
          />
        </figure>
      </div>
      <div className="container">
        <div className="box red"></div>
        <div className="box green"></div>
        <div className="box"></div>
      </div>
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Rack</li>
            <li>Library</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
    </HeaderStyles>
  );
};
