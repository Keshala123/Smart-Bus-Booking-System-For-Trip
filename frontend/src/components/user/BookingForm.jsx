import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


const BookingForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const [selectedDate, setSelectedDate] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      type: tripType === "one-way" ? "One way" : "Round trip",
      date: selectedDate
        ? selectedDate.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })
        : "",
      from,
      to,
      name,
      number,
      status: "Waiting",
    };
    try {
      await axios.post(
        "http://localhost:5000/api/booking/create",
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Booking request submitted!");
      // Optionally clear form
      setTripType("one-way");
      setSelectedDate(null);
      setFrom("");
      setTo("");
      setName("");
      setNumber("");
    } catch (err) {
      alert(
        "Booking failed: " +
          (err.response?.data?.message || "Please try again later.")
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 24,
        borderRadius: 16,
        boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: 28, marginBottom: 24 }}>
        Book Your Journey
      </h2>

      {/* Trip Type */}
      <div style={{ marginBottom: 20, display: "flex", gap: 24 }}>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input
            type="radio"
            name="tripType"
            value="one-way"
            checked={tripType === "one-way"}
            onChange={() => setTripType("one-way")}
            style={{ marginRight: 8, accentColor: "#6366f1" }}
          />
          <span style={{ fontWeight: 500 }}>One way</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input
            type="radio"
            name="tripType"
            value="round-trip"
            checked={tripType === "round-trip"}
            onChange={() => setTripType("round-trip")}
            style={{ marginRight: 8, accentColor: "#6366f1" }}
          />
          <span style={{ fontWeight: 500 }}>Round trip</span>
        </label>
      </div>

      {/* From */}
      <div style={{ marginBottom: 16 }}>
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          required
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            marginBottom: 4,
          }}
        />
      </div>

      {/* To */}
      <div style={{ marginBottom: 16 }}>
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
          required
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            marginBottom: 4,
          }}
        />
      </div>

      {/* Date Picker */}
      <div style={{ marginBottom: 16 }}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a date"
          dateFormat="EEE, MMM d"
          minDate={new Date()}
          required
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
          }}
          className="react-datepicker__input-text"
        />
      </div>

  {      /* Name */  }
      
     <div style={{ marginBottom: 16 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            marginBottom: 4,
          }}
        />
      </div>

      {/* Number */}
      <div style={{ marginBottom: 16 }}>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          required
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
            marginBottom: 4,
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          background: "#6366f1",
          color: "#fff",
          fontWeight: 600,
          padding: "12px 0",
          borderRadius: 8,
          border: "none",
          fontSize: 18,
          cursor: "pointer",
          transition: "background 0.2s",
        }}
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
