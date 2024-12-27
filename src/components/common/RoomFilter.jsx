import React, { useState } from "react";

const RoomFilter = ({ data, setFiltererData }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    const selectedRoomType = e.target.value;
    setFilter(selectedRoomType);
    const filteredData = data.filter((room) => {
      room.roomType.toLowerCase().includes(selectedRoomType.toLowerCase());
    });
    setFiltererData(filteredData);
  };

  const clearFilter = () => {
    setFilter("");
    setFiltererData(data);
  };

  const roomTypes = ["", ...new Set(data.map((room) => room.roomType))];

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="room-type-filter">
        Filter rooms by type
      </span>

      <select
        className="form-select"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value={""}> Select a room type to filter ...</option>
        {roomTypes.map((type, index) => (
          <option key={index} value={String(type)}>
            {String(type)}
          </option>
        ))}
      </select>
      <button className="btn btn-hotel" type="button" onClick={clearFilter}>
        Clear filter
      </button>
    </div>
  );
};

export default RoomFilter;
