import React, { useEffect, useState } from "react";
import { getRoomTypes } from "../utils/ApiFunctions";

function RoomTypeSelector({ handleRoomInputChange, newRoom }) {
  const [roomType, setRoomTypes] = useState([]);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

  useEffect(() => {
    getRoomTypes().then((data) => {
      setRoomTypes(data);
    });
  }, []);

  const handleNewRoomTypeInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType !== "") {
      setRoomTypes([...roomType, newRoomType]);
      setNewRoomType("");
      setShowNewRoomForm(false);
    }
  };

  return (
    <>
      {roomType.length > 0 && (
        <div>
          <select
            name="roomType"
            id="roomType"
            value={newRoom.roomType}
            onChange={(e) => {
              if (e.target.value === "Add new") {
                setShowNewRoomTypeInput(true);
              } else {
                handleRoomInputChange(e);
              }
            }}
          >
            <option value={""}>select a room type</option>
            <option value={"Add new"}>Add new</option>
            {roomType.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          {showNewRoomTypeInput && (
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter new room type"
                onChange={handleNewRoomTypeInputChange}
              />

              <button
                className="btn btn-hotel"
                type="button"
                onClick={handleAddNewRoomType}
              >
                {" "}
                Add
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default RoomTypeSelector;
