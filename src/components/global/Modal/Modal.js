import React, {useState, useEffect, useRef} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import * as yup from 'yup';
import { gsap } from "gsap";
import styled from 'styled-components';

// ==============================================
// ==============================================

const modal_width = '80vw';
const modal_height = '80vh';

const Form = styled.form` position: absolute;
  z-index: 1;
  display: ${({visible}) => visible ? 'grid' : 'none'};
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  
  top:  calc( 50% - ${modal_height}/ 2);
  left: calc( 50% - ${modal_width} / 2);
  width:  ${modal_width};
  height: ${modal_height};
  background: orange;

  opacity: 0;
  /* TODO: Add gsap to transition opacity upon first render, and could do the reverse by  */

  > * {
    border: solid white 3px; 
  }
`;

// ==============================================
// ==============================================
const init_form = {
  name: '',                 // text
  special_text: '',         // textarea
  age: '',                  // number
  email: '',                // text
  password: '',             // text
  gluten_free_crust: false, // checkbox
  radio: null,              // radio
  topping1: false,          // checkbox
  topping2: false,          // checkbox
  topping3: false,          // checkbox
  topping4: false,          // checkbox
  drop: ''                  // dropdown
};

// ==============================================
// ==============================================

const schema = yup.object().shape({
  name:     yup.string().required('name is required').min(2, 'name must be at least 2 characters')
});

// ==============================================
// ==============================================

const Modal = () => {

  // --------------------------------------------

  const inputRef            = useRef(null);
  const [form, setForm]     = useState(init_form);
  const [errors, setErrors] = useState({name: ''});


  // --------------------------------------------

  useEffect(() => {
    const elem = inputRef.current;
    console.log('Modal.js, elem: ', elem);
    gsap.to(elem, {opacity: 1, duration: 0.5});
  }, []);

  // --------------------------------------------

  const onChange = (event) => {
    
    const setFormErrors = (name, value) => {
      yup.reach(schema, name).validate(value)
        .then(  ()    => setErrors({ ...errors, [name]: '' }) ) // succssful validation => no error
        .catch( (err) => setErrors({ ...errors, [name]: err.errors[0] }) )
    };

    console.log('value: ', event.target.value, ', type: ', event.target.type);
    const { checked, type, name, value } = event.target;
    if ( type == 'checkbox' ) {
      setFormErrors(name, checked);
      setForm( {...form, [name]: checked} );
    }
    else {
      setFormErrors(name, value);
      setForm( {...form, [name]: value} );
    }
  };

  // --------------------------------------------

  const history = useHistory();
  function handleClick() {
    const duration = 0.5;
    gsap.to(inputRef.current, {opacity: 0, duration});
    setTimeout(() => history.push("/"), duration * 1e3);
  }

  // --------------------------------------------

  const onSubmit = (event) => {
    console.log('onSubmit()  ::::  event.target: ', event.target);
    event.preventDefault();

    const form_data = {
      "name": `${form.name}`,
      "special": `${form.special_text}`,
      "gluten_free_crust": `${form.gluten_free_crust}`,
      "topping1": `${form.topping1}`,
      "topping2": `${form.topping2}`,
      "topping3": `${form.topping3}`,
      "topping4": `${form.topping4}`,
      "radio": `${form.radio}`,
      "drop": `${form.drop}`
    };

    axios.post('https://reqres.in/api/orders', form_data)
      .then((response) => {
        console.log('response.data: ', response.data);
        // setUsers(response.data);
      });
  };

  // --------------------------------------------

  return (
    <Form id="pizza-for" visible={true} ref={inputRef} onSubmit={onSubmit}>
      <div>
        Build Your Own Pizza
        <div onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
          </svg>
        </div>

      </div>
      
      {/* drop: select */}
      <div>
        <h5>Choice of Size</h5>
        <p>Required</p>
        
        <select id="size-dropdown" name="drop" value={form.drop} onChange={onChange}>
          <option value="">Choose One!</option>
          <option value="drop1">Drop 1</option>
          <option value="drop2">Drop 2</option>
          <option value="drop3">Drop 3</option>
        </select>

      </div>
      
      {/* radio: radio */}
      <div>
        <h5>Choice of Sauce</h5>
        <p>Required</p>

        {/* radio: radio-1 */}
        <label>
          Radio 1
          <input type="radio" name="radio" value="radio-1"  //  form: {..., name:  value, ...}
            checked={form.radio == 'radio-1'}               //              radio: radio-1
            onChange={onChange} 
          />
        </label>

        {/* radio: radio-2 */}
        <label>
          Radio 2 
          <input type="radio" name="radio" value="radio-2"  //  form: {..., name:  value, ...}
            checked={form.radio == 'radio-2'}               //              radio: radio-2
            onChange={onChange} 
          />
        </label>

      </div>

      {/* topping1, ..., topping4: checkbox's */}
      <div>
        <h5>Add Toppings</h5>
        <p>Required</p>

        {/* topping1: checkbox */}
        <label>
          Check 1
          <input type="checkbox" name="topping1" 
            checked={form.topping1} // GUI check if form: {..., topping1: bool, ...} 
            onChange={onChange} 
          />
        </label>

        {/* topping2: checkbox */}
        <label>
          Check 2
          <input type="checkbox" name="topping2" 
            checked={form.topping2} // GUI check if form: {..., topping2: bool, ...} 
            onChange={onChange} 
          />
        </label>

        {/* topping3: checkbox */}
        <label>
          Check 3
          <input type="checkbox" name="topping3" 
            checked={form.topping3} // GUI check if form: {..., topping3: bool, ...} 
            onChange={onChange} 
          />
        </label>

        {/* topping4: checkbox */}
        <label>
          Check 4
          <input type="checkbox" name="topping4" 
            checked={form.topping4} // GUI check if form: {..., topping4: bool, ...} 
            onChange={onChange} 
          />
        </label>

      </div>

      {/* gluten_free_crust: checkbox */}
      <div>
        <h5>Choice of Substitute</h5>
        <p>Required</p>

        <label>
          Gluten Free Crust (+ $1.00)
          <input type="checkbox" name="gluten_free_crust" 
            checked={form.gluten_free_crust} // GUI check if form: {..., gluten_free_crust: boolean, ...} 
            onChange={onChange} 
          />
        </label>

      </div>
      
      {/* special_text: textarea */}
      <div>
        <h5>Special Instructions</h5>
        <p>Required</p>

        {/* special_text: '',                // textarea */}
        <label>
          <textarea id="special-text" name="special_text" value={form.special_text} onChange={onChange} placeholder="Anything else you'd like to add?"/>
        </label>

      </div>
      
      {/* name: text */}
      <div>
        <h5>Name</h5>
        <p>Required</p>

        <label>
          <input id="name-input" name="name" value={form.name} onChange={onChange} placeholder="name"/>
        </label>

        <div style={{ color: 'red' }}>
          <div>{errors.name}</div>
        </div>
      
      </div>
      
      {/* submit button */}
      <div>
        {/* TODO: Wire up this input */}
        <input type="number" />
        <button id="order-button" type="submit">Add to Order $17.99</button>
      </div>
    </Form>
  );
};

export default Modal;