import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import '../styles/reservation.css';

export default function GuestSelection() {
    const [editGuestsVisible, setEditGuestsVisible] = useState(false);
    const [adults, setAdults] = useState(1); // Default to 1 adult
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    const toggleEditGuests = () => {
        setEditGuestsVisible(!editGuestsVisible);
      };
    
      const handleSaveGuests = () => {
        const dataToSave = {
          adults,
          children,
          infants,
          pets
        };
        console.log("Data to save:", dataToSave);
        
        setEditGuestsVisible(false);
      };
    
      const handleCancelEdit = () => {
        setEditGuestsVisible(false);
      };
      const totalGuests = adults + children + infants + pets;
  return (
    <div>
       <h6 className='editpage1' onClick={toggleEditGuests}>Edit</h6>
                {editGuestsVisible && (
                  <div className="guestsSection">
                    <div>
                      <label>Adults
                        <p>(Age 13+)</p>
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="4"
                        value={adults}
                        onChange={(e) => setAdults(parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <label>Children
                        <p>(Ages 2–12)</p>
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="4"
                        value={children}
                        onChange={(e) => setChildren(parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <label>Infants
                        <p>(Under 2)</p>
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="4"
                        value={infants}
                        onChange={(e) => setInfants(parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <label>Pets
                        <p>(Service animals)</p>
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="4"
                        value={pets}
                        onChange={(e) => setPets(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="btn-group mt-3 gap-5">
                      <Button variant="success" onClick={handleSaveGuests}>Save</Button>
                      <Button variant="danger" onClick={handleCancelEdit}>Cancel</Button>
                    </div>
                  </div>
                )}
                {!editGuestsVisible && (
                  <p className='totalguests'>Guests: {totalGuests}</p>
                )}
              </div>
  )
}
