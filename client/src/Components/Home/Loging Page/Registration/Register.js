import React, { useState } from 'react';
const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password:'',
    phone: '',
    firstName: '',
    lastName: '',
    height: '',
    weight: '',
    disease: 'None', 
    allergies: '',
    fitnessGoal: 'Weight Loss', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res=await fetch("http://localhost:8080/register",{
    method:'POST',
    headers:{
    "Content-Type":"application/json",
    },
    body:JSON.stringify(formData)
   })
   if(res.status===201){
    console.log("Registration Successfull!!");
   }
    e.preventDefault();
    console.log('Form Data:', formData);
   };

  return (
    <form onSubmit={handleSubmit} className='xyz'>
        <h2>Register here</h2>
      <label htmlFor="emailInput">Email:</label>
      <input
        type="email"
        id="emailInput"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="passwordInput">Password:</label>
      <input
        type="password"
        id="passwordInput"
        name="password"
        value={formData.Password}
        onChange={handleChange}
        required
      />
      <label htmlFor="phoneInput">Phone Number:</label>
      <input
        type="tel"
        id="phoneInput"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label htmlFor="firstNameInput">First Name:</label>
      <input
        type="text"
        id="firstNameInput"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastNameInput">Last Name:</label>
      <input
        type="text"
        id="lastNameInput"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="heightInput">Height (in cm):</label>
      <input
        type="number"
        id="heightInput"
        name="height"
        value={formData.height}
        onChange={handleChange}
        required
      />

      <label htmlFor="weightInput">Weight (in kg):</label>
      <input
        type="number"
        id="weightInput"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        required
      />

      <label htmlFor="diseaseDropdown">Disease:</label>
      <select
        id="diseaseDropdown"
        name="disease"
        value={formData.disease}
        onChange={handleChange}
      >
        <option value="None">None</option>
        <option value="Hypertension">Hypertension</option>
        <option value="Diabetes">Diabetes</option>
        <option value="Diabetes">migraine</option>
        <option value="Diabetes">Heart conditions</option>
        <option value="Diabetes">obesity</option>
        <option value="Diabetes">Asthma</option>
      </select>

      <label htmlFor="allergiesInput">Allergies:</label>
      <input
        type="text"
        id="allergiesInput"
        name="allergies"
        value={formData.allergies}
        onChange={handleChange}
      />

      <label htmlFor="fitnessGoalDropdown">Fitness Goals:</label>
      <select
        id="fitnessGoalDropdown"
        name="fitnessGoal"
        value={formData.fitnessGoal}
        onChange={handleChange}
      >
        <option value="Weight Loss">Weight Loss</option>
        <option value="Weight Gain">Weight Gain</option>
        <option value="Muscular Body">Muscular Body</option>
        <option value=" Endurance and Cardiovascular Health">Endurance and Cardiovascular Health</option>
        <option value="Mind-Body Connection">Mind-Body Connection</option>
        <option value="Posture Improvement">Posture Improvement</option>
        <option value="Maintenance and Longevity">Maintenance and Longevity</option>
        <option value="Flexibility and Mobility">Flexibility and Mobility</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;