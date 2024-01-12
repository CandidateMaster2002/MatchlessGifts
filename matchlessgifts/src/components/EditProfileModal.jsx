import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "../services/axios";
const EditProfileModal = ({ show, onHide, user }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;


  
     


  
    // Check if the property has a nested structure (e.g., address.street)
    const nestedProperties = name.split('.');
    if (nestedProperties.length === 2) {
      const [nestedObject, nestedProperty] = nestedProperties;
      setEditedUser((prevUser) => ({
        ...prevUser,
        [nestedObject]: {
          ...prevUser[nestedObject],
          [nestedProperty]: value,
        },
      }));
    } else {
      setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };
  
  const handleSaveChanges = () => {

    if(!validateForm()) return false;

      axios.post('/users/updateProfile', editedUser)
      .then((response) => {
        console.log('User updated successfully:', response.data);
      onHide(); // Close the modal after saving changes
      alert("User updated successfully:");
    })
    .catch((error) => {
      console.error('Failed to update user:', error);
      // Handle error, display a message, etc.
    });
  };

  const validateForm = () => {
    // Name validation
    if (!editedUser.name.trim()) {
      alert('Name is required');
      return false;
    }

    // Email validation
    if (!editedUser.email.trim()) {
      alert('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(editedUser.email)) {
      alert('Invalid email address');
      return false;
    }

    // Mobile validation
    if (!editedUser.mobileno.trim()) {
      alert('Mobile number is required');
      return false;
    } else if (!/^[6-9]\d{9}$/.test(editedUser.mobileno)) {
      alert('Invalid mobile number');
      return false;
    }

    // Address validation
    const address = editedUser.address || {};
    if (!address.street.trim()) {
      alert('Street is required');
      return false;
    }
    if (!address.city.trim()) {
      alert('City is required');
      return false;
    }
    if (!address.state.trim()) {
      alert('State is required');
      return false;
    }
    if (!address.pincode.trim() || !/^\d+$/.test(address.pincode)) {
      alert('Invalid pincode');
      return false;
    }

    return true; // Form is valid
  };


  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              name="mobileno"
              value={editedUser.mobileno}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAddressStreet">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              name="address.street"
              value={editedUser.address?.street || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAddressCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="address.city"
              value={editedUser.address?.city || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAddressState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="address.state"
              value={editedUser.address?.state || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAddressPincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              name="address.pincode"
              value={editedUser.address?.pincode || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
