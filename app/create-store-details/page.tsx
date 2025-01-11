import React, { forwardRef, useImperativeHandle, useState } from 'react';

interface StoreDetailsProps {
    // Add any props if needed
}

const StoreDetails = forwardRef((props: StoreDetailsProps, ref) => {
    const [storeName, setStoreName] = useState('');
    const [category, setCategory] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({
      storeName: '',
      category: '',
      address: '',
      phoneNumber: '',
      email: '',
  });

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
      if (name === 'storeName') setStoreName(value);
      if (name === 'category') setCategory(value);
      if (name === 'address') setAddress(value);
      if (name === 'phoneNumber') setPhoneNumber(value);
      if (name === 'email') setEmail(value);
  };

    // Validate the form fields
    const validate = () => {
        let isValid = true;
      const newErrors = {
          storeName: '',
          category: '',
          address: '',
          phoneNumber: '',
          email: '',
      };

      if (!storeName) {
          newErrors.storeName = 'Store Name is required';
          isValid = false;
      }
      if (!category) {
          newErrors.category = 'Category is required';
          isValid = false;
      }
      if (!address) {
          newErrors.address = 'Address is required';
          isValid = false;
      }

      const phonePattern = /^[0-9]{10}$/;
      if (!phoneNumber || !phonePattern.test(phoneNumber)) {
          newErrors.phoneNumber = 'Phone Number is invalid';
          isValid = false;
      }

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email || !emailPattern.test(email)) {
          newErrors.email = 'Email is invalid';
          isValid = false;
      }

      setErrors(newErrors);
      return isValid;
  };

    // Expose validate method to parent component
    useImperativeHandle(ref, () => ({
        validate,
    }));

    return (
      <div className="mt-8 w-11/12 md:w-9/12 m-auto">
          <p className="text-[24px] font-bold">Enter Store Details</p>
          <form className="space-y-4">
              <div>
                  <input
                      placeholder="Store Name"
                      type="text"
                      name="storeName"
                      value={storeName}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-4 py-4 border rounded-lg"
                  />
                  {errors.storeName && <p className="text-red-500 text-sm">{errors.storeName}</p>}
              </div>

              <div>
                  <input
                      placeholder="Category"
                      type="text"
                      name="category"
                      value={category}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-4 py-4 border rounded-lg"
                  />
                  {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
              </div>

              <div>
                  <input
                      placeholder="Address"
                      type="text"
                      name="address"
                      value={address}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-4 py-4 border rounded-lg"
                  />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>

              <div>
                  <input
                      placeholder="Phone Number"
                      type="text"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-4 py-4 border rounded-lg"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
              </div>

              <div>
                  <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-4 py-4 border rounded-lg"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
          </form>
      </div>
  );
});

export default StoreDetails;
