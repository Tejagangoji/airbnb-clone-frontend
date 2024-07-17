import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import "../styles/login.css";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaApple } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export default function Login() {
  const [showLogin, setShowLogin] = useState(true);

  const handleClose = () => {
    setShowLogin(false);
  };

  if (!showLogin) {
    return null; 
  }

  const countryOptions = [
  "+91 (India)",
  "+1 (USA)",
  "+44 (UK)",
  "+86 (China)",
  "+81 (Japan)",
  "+49 (Germany)",
  "+33 (France)",
  "+34 (Spain)",
  "+39 (Italy)",
  "+7 (Russia)",
  "+61 (Australia)",
  "+82 (South Korea)",
  "+65 (Singapore)",
  "+52 (Mexico)",
  "+971 (UAE)"
  ];

  return (
    <div className="login">
      <div className="loginwrap">
        <div className="head">
          <RxCross2 className="icon" onClick={handleClose} />
          <h5> Login or Signup</h5>
        </div>
        <div className="section">
          <Form>
            <div className="container mt-4">
              <h4>Welcome to Airbnb</h4>
              <Form.Control as="select">
                {countryOptions.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </Form.Control>
              <Form.Control type="tel" placeholder="Enter phone number" />
              <p style={{ marginTop: "0.5rem", fontFamily:"style", marginLeft:"1rem" }}><small>
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.</small>
              </p>
              <Button
                variant="danger mt-2 w-100 mb-5 border-dark"
                type="submit"
                onClick={handleClose} 
              >
                Continue
              </Button>
            </div>
          </Form>

          <div className="horizantal">
            <hr className="divider" /> or <hr className="divider" />
          </div>

          <div className="section2">
            <h5 className="alt-head">Continue with</h5>
            <Button variant="outline-dark w-100 mb-3">
              <div className="items">
                <ImFacebook2 className="icon" />
                <div>Continue with Facebook</div>
              </div>
            </Button>
            <Button variant="outline-dark w-100 mb-3">
              <div className="items">
                <FcGoogle className="icon" />
                <div>Continue with Google</div>
              </div>
            </Button>
            <Button variant="outline-dark w-100 mb-3">
              <div className="items">
                <FaApple className="icon" />
                <div> Continue with Apple</div>
              </div>
            </Button>
            <Button variant="outline-dark w-100 mb-3">
              <div className="items">
                <MdAttachEmail className="icon" />
                <div> Continue with Email</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}