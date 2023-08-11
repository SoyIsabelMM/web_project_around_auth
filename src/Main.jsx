import React from "react";
import Profile from "./Profile";
import Elements from "./Elements";
import Popup from "./Popup";
import Modal from "./Modal";
import Template from "./Template";

function Main() {
  return (
    <main className="content">
      <Profile />
      <Elements />
      <Popup />
      <Modal />
      <Template />
    </main>
  );
}

export default Main;
