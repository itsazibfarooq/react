import React from 'react';

export default function Form(){
  
  const [formData, setFormData] = React.useState(
    {
      firstName:'', 
      lastName:'',
      email:'',
      comments:'',
      isEngineer:false,
      employment:'',
      favColor:''
    }
  );

  function handleChange(event){
    const {name, value, type, checked} = event.target;
    setFormData(prevData => (
      {
        ...prevData, 
        [name] : type === 'checkbox'? checked : value
      }));
  }
  
  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form>
      <input
        type='text'
        placeholder='First Name'
        name='firstName'
        onChange={handleChange}
      />
      <br />
      
      <input
        type='text'
        placeholder='Last Name'
        name='lastName'
        onChange={handleChange}
      />
      <br />

      <input
        type='email'
        placeholder='abc@email.com'
        name='email'
        onChange={handleChange}
      />
      <br />
      
      <textarea
        placeholder='add comments'
        name='comments'
        onChange={handleChange}
      />
      <br />
      
      <input 
        type='checkbox'
        name='isEngineer'
        onChange={handleChange}
        checked = {formData.isEngineer}
        id='isEngineer'
      />
      <label htmlFor='isEngineer'> Are you an Engineer</label>
      <br />

      <fieldset>
        <legend>Type of Job</legend>

        <input type='radio' id='unemployed' value='unemployed' name='employment' onChange={handleChange}/>
        <label htmlFor='unemployed'>Umeployed</label>
        <br />

        <input type='radio' id='part-time' value='part-time' name='employment' onChange={handleChange}/>
        <label htmlFor='part-time'>Part Time</label>
        <br />

        <input type='radio' value='full-time' name='employment' onChange={handleChange}/>
        <label htmlFor='full-time'>Part Time</label>
        <br />
      </fieldset>
      <br />

      <select
        onChange={handleChange}
        name='favColor'
        value={formData.favColor}
      >
        <option defaultValue='red'>Red</option>
        <option value='blue'>blue</option>
        <option value='green'>green</option>
        <option value='black'>black</option>
      </select>
      <br />
      
      <button onClick={handleSubmit}>submit</button>
    </form>
  )
}