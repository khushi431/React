// (1) when time is taking from json file

import React, { useState } from 'react';
import './AvailabilityForm.css';
import availableData from './Data/available.json';

const AvailabilityForm = () => {
  // Initialize the state with data from the JSON file
  const [availability, setAvailability] = useState(availableData);

  const handleTimeChange = (day, index, field, value) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: prevAvailability[day].map((slot, idx) =>
        idx === index ? { ...slot, [field]: value } : slot
      ),
    }));
  };

  const addTimeSlot = (day) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: [...prevAvailability[day], { start: '', end: '' }],
    }));
  };

  const removeTimeSlot = (day, index) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: prevAvailability[day].filter((_, idx) => idx !== index),
    }));
  };

  const saveAvailability = () => {
    console.log('Availability Saved:', availability);
    alert('Availability saved successfully!');
  };

  return (
    <div className="availability-form line-wise-layout">
      <h2>Available Hours</h2>
      <div className="availability-days">
        {Object.keys(availability).map((day) => (
          <div className="day-row" key={day}>
            <label className="day-label">{day.charAt(0).toUpperCase() + day.slice(1)}</label>
            <div className="time-slots-container">
              {availability[day].map((slot, index) => (
                <div key={index} className="time-slot">
                  <input
                    type="time"
                    value={slot.start}
                    onChange={(e) => handleTimeChange(day, index, 'start', e.target.value)}
                    className="time-input"
                  />
                  <span className="to-label">to</span>
                  <input
                    type="time"
                    value={slot.end}
                    onChange={(e) => handleTimeChange(day, index, 'end', e.target.value)}
                    className="time-input"
                  />
                  {availability[day].length > 1 && (
                    <button
                      type="button"
                      className="remove-slot-btn"
                      onClick={() => removeTimeSlot(day, index)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button type="button" className="add-slot-btn" onClick={() => addTimeSlot(day)}>
              + Add hours
            </button>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="save-btn" onClick={saveAvailability}>
          Save Availability
        </button>
      </div>
    </div>
  );
};

export default AvailabilityForm;































// // In this code we can input the time according to ourself
// import React, { useState } from 'react';
// import './AvailabilityForm.css';

// // The component initializes the state availability as an object that contains each day of the week
// //  (Monday to Sunday). For each day, the state holds an array of objects with start and end times.

// const AvailabilityForm = () => {
//   const [availability, setAvailability] = useState({
//     monday: [{ start: '', end: '' }],
//     tuesday: [{ start: '', end: '' }],
//     wednesday: [{ start: '', end: '' }],
//     thursday: [{ start: '', end: '' }],
//     friday: [{ start: '', end: '' }],
//     saturday: [{ start: '', end: '' }],
//     sunday: [{ start: '', end: '' }],
//   });

//   const [selectedDay, setSelectedDay] = useState('monday'); // State to store which day's slots to apply


//   // The handleTimeChange function updates the state for a particular time slot. 
//   // This is a function that updates the start or end time for a specific time slot on a specific day.
//   //  It takes the day, index, field (start or end), and the new value as parameters and updates the relevant time slot.

//   const handleTimeChange = (day, index, field, value) => {
//     console.log("handle time change");
//     setAvailability((prevAvailability) => ({
//       ...prevAvailability,
//       [day]: prevAvailability[day].map((slot, idx) =>
//         idx === index ? { ...slot, [field]: value } : slot
//       ),
//     }));
//   };


//   // The addTimeSlot function allows users to add a new time
//   //  slot for a specific day. It appends a new slot with empty start and end values to the selected day.

//   const addTimeSlot = (day) => {
//     console.log("add time slot");
//     setAvailability((prevAvailability) => ({
//       ...prevAvailability,
//       [day]: [...prevAvailability[day], { start: '', end: '' }],
//     }));
//   };

//   // The removeTimeSlot function removes a 
//   // specific time slot based on its index for a given day. It filters out the time slot from the state.

//   const removeTimeSlot = (day, index) => {
//     console.log("remove time slot");
//     setAvailability((prevAvailability) => ({
//       ...prevAvailability,
//       [day]: prevAvailability[day].filter((_, idx) => idx !== index),
//     }));
//   };

//   // The applyToAllDays function allows users to apply the time slots from one selected day to all other days.
//   //  The user selects the day from the dropdown, and its time slots are copied to the rest of the days.
//   // Apply the selected day's availability to all other days
//   const applyToAllDays = () => {
//     console.log("apply to all days");
//     const sourceSlots = availability[selectedDay]; // Use selected day's slots
//     setAvailability((prevAvailability) => {
//       const newAvailability = {};
//       Object.keys(prevAvailability).forEach((day) => {
//         if (day !== selectedDay) {
//           newAvailability[day] = [...sourceSlots]; // Apply the selected day's slots to every other day
//         } else {
//           newAvailability[day] = prevAvailability[day]; // Keep the selected day's slots as is
//         }
//       });
//       return newAvailability;
//     });
//   };


//   // The saveAvailability function logs the current availability to the console and displays a confirmation alert.
//   //  This simulates the action of saving the form, which could be expanded to send data to a backend.
//   const saveAvailability = () => {
//     console.log('Availability Saved:', availability);
//     alert('Availability saved successfully!');
//   };

//   return ( 
//     <div className="availability-form line-wise-layout">
//       <h2> Available Hours</h2>
//       <div className="availability-days">
//         {Object.keys(availability).map((day) => (
//           <div className="day-row" key={day}>
//             <label className="day-label">{day.charAt(0).toUpperCase() + day.slice(1)}</label>
//             <div className="time-slots-container">
//               {availability[day].map((slot, index) => (
//                 <div key={index} className="time-slot">
//                   <input
//                     type="time"
//                     value={slot.start}
//                     onChange={(e) => handleTimeChange(day, index, 'start', e.target.value)}
//                     className="time-input"
//                   />
//                   <span className="to-label">to</span>
//                   <input
//                     type="time"
//                     value={slot.end}
//                     onChange={(e) => handleTimeChange(day, index, 'end', e.target.value)}
//                     className="time-input"
//                   />
//                   {availability[day].length > 1 && (
//                     <button
//                       type="button"
//                       className="remove-slot-btn"
//                       onClick={() => removeTimeSlot(day, index)}
//                     >
//                       ✕
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <button type="button" className="add-slot-btn" onClick={() => addTimeSlot(day)}>
//               + Add hours
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="button-container">
//         <label>Select Day to Apply to All:</label>
//         <select
//           value={selectedDay}
//           onChange={(e) => setSelectedDay(e.target.value)}
//           className="day-select"
//         >
//           {Object.keys(availability).map((day) => (
//             <option key={day} value={day}>
//               {day.charAt(0).toUpperCase() + day.slice(1)}
//             </option>
//           ))}
//         </select>

//         <button className="apply-btn" onClick={applyToAllDays}>
//           Apply to All Days
//         </button>

//         <button className="save-btn" onClick={saveAvailability}>
//           Save Availability
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AvailabilityForm;



