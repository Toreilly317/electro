import * as React from "react";
import { DeadCenter, FullPage } from "../Common";

export const LoginPage = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <FullPage>
      <DeadCenter>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </DeadCenter>
    </FullPage>
  );
};
