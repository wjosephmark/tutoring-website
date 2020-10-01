import React, { useState } from "react";

export default function Availability() {
  
  const [monday, setMonday] = useState("")
  const [tuesday , setTuesday] = useState("")
  const [wednesday, setWednesday] = useState("")
  const [thursday, setThursday] = useState("")
  const [friday, setFriday] = useState("")

  return (
    <div className="app">
      <h1>Hello from availability</h1>
    </div>
  );
}