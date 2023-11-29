import React, { useState } from "react";
import Modal from "react-modal";
import PhoneInput from "./PhoneNumberInput";
import Button from "../common/Button";
import XLg from "../icons/common/XLg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F1F8EC",
  },
};

Modal.setAppElement(".drawer"); // Set the root element for accessibility

function ModalForm({ isOpen, onRequestClose, onSubmit, closeModal }: any) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    interests: "",
  });
  const [phone, setPhone] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // You can handle the form submission here and call the onSubmit prop
    onSubmit(formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Register Modal"
    >
      <XLg onClick={closeModal} />
      <h2 className="mb-5 text-center text-xl font-semibold">Register</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
        <div>
          <input
            className="inline-flex h-[40px] w-[360px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] md:w-[389px]"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
        <div>
          <input
            className="inline-flex h-[40px] w-[360px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] md:w-[389px]"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>

        <div>
          <PhoneInput phone={phone} setPhone={setPhone} />
        </div>
        <div>
          <select
            className="inline-flex h-[40px] w-[360px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] md:w-[389px]"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
          >
            <option value="">Select an interest</option>
            <option value="interest1">Interest 1</option>
            <option value="interest2">Interest 2</option>
            <option value="interest3">Interest 3</option>
=          </select>
        </div>
      </form>
      <Button text="Submit" size="not" type="submit" addedClass="mx-auto" goto={""} />
    </Modal>
  );
}

export default ModalForm;
