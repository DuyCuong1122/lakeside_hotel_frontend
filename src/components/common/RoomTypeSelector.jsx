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
      console.log(newRoomType + " added");
      setRoomTypes([...roomType, newRoomType]); // Thêm loại phòng mới vào danh sách
      setNewRoomType(""); // Reset trường input
      setShowNewRoomTypeInput(false); // Ẩn input để thêm loại phòng mới
    }
  };

  return (
    <>
      {roomType.length >= 0 && (
        <div>
          <select
            name="roomType"
            id="roomType"
            value={newRoom.roomType}
            onChange={(e) =>
              e.target.value === "Add new"
                ? setShowNewRoomTypeInput(true)
                : handleRoomInputChange(e)
            }
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
