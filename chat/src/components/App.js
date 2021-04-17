import "./App.css";
import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { SocketProvider } from "../contexts/SocketProvider";

export default function App() {
  // const [id, setId] = useLocalStorage("id");
  // const dashboard = (
  //   <SocketProvider id={id}>
  //     <ContactsProvider>
  //       <ConversationsProvider id={id}>
  //         <Dashboard id={id} />
  //       </ConversationsProvider>
  //     </ContactsProvider>
  //   </SocketProvider>
  // );
  // return id ? dashboard : <Login onIdSubmit={setId} />;
  // (
  //   <body>
  //     <div id="message-container"></div>
  //     <form id="send-container">
  //       <input type="text" id="message-input" />
  //       <button type="submit" id="send-button">
  //         Send
  //       </button>
  //     </form>
  //   </body>
  //)
}
