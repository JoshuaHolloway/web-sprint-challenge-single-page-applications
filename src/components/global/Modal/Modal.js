import React, {useState} from 'react';
import styled from 'styled-components';

const modal_width = '80vw';
const modal_height = '80vh';

// ==============================================
// ==============================================

const Div = styled.div` position: absolute;
  display: ${({visible}) => visible ? 'grid' : 'none'};
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr);
  
  top:  calc( 50% - ${modal_height}/ 2);
  left: calc( 50% - ${modal_width} / 2);
  width:  ${modal_width};
  height: ${modal_height};
  background: orange;

  > * {
    border: solid white 3px; 
  }
`;

// ==============================================
// ==============================================
const init_form = {
  name: '',                // text
  age: '',                 // number
  email: '',               // text
  password: '',            // text
  terms_of_service: false, // checkbox
  radio: null,             // radio
  check1: false,           // checkbox
  check2: false,           // checkbox
  drop: ''                 // dropdown
};
// ==============================================
// ==============================================

const Modal = ({visible, setVisible}) => {

  // ============================================

  const [form, setForm] = useState(init_form);

  // ============================================

  const onChange = (event) => {
    console.log('value: ', event.target.value, ', type: ', event.target.type);
    const { checked, type, name, value } = event.target;
    if ( type == 'checkbox' ) {
      // setFormErrors(name, checked);
      setForm( {...form, [name]: checked} );
    }
    else {
      // setFormErrors(name, value);
      setForm( {...form, [name]: value} );
    }
  };

  // ============================================

  return (
    <Div visible={visible}>
      <div>
        Build Your Own Pizza

        <div onClick={() => setVisible(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
          </svg>
        </div>

      </div>
      
      <div>
        
        <h5>Choice of Size</h5>
        <p>Required</p>
        
        <select name="drop" value={form.drop} onChange={onChange}>
          <option value="">Choose One!</option>
          <option value="drop1">Drop 1</option>
          <option value="drop2">Drop 2</option>
          <option value="drop3">Drop 3</option>
        </select>

      </div>
      
      <div>
        <h5>Choice of Sauce</h5>
        <p>Required</p>

        <label>
          Radio 1
          <input type="radio" name="radio" value="radio-1"  //  form: {..., name:  value, ...}
            checked={form.radio == 'radio-1'}               //              radio: radio-1
            onChange={onChange} 
          />
        </label>
        <label>
          Radio 2 
          <input type="radio" name="radio" value="radio-2"  //  form: {..., name:  value, ...}
            checked={form.radio == 'radio-2'}               //              radio: radio-2
            onChange={onChange} 
          />
        </label>

      </div>
      <div>
        <h5>Add Toppings</h5>
        <p>Required</p>

        {/* check1: false,           // checkbox */}
        <label>
          Check 1
          <input type="checkbox" name="check1" 
            checked={form.check1} // GUI check if form: {..., check1: true, ...} 
            onChange={onChange} 
          />
        </label>

        {/* check2: false,           // checkbox */}
        <label>
          Check 2
          <input type="checkbox" name="check2" 
            checked={form.check2} // GUI check if form: {..., check2: true, ...} 
            onChange={onChange} 
          />
        </label>

      </div>
      <div>
        <h5>Choice of Substitute</h5>
        <p>Required</p>

        {/* terms_of_service: false, // checkbox */}
        <label>
          Gluten Free Crust (+ $1.00)
          <input type="checkbox" name="terms_of_service" 
            checked={form.terms_of_service} // GUI check if form: {..., terms_of_service: true, ...} 
            onChange={onChange} 
          />
        </label>

      </div>
      
      <div>
        <h5>Special Instructions</h5>
        <p>Required</p>

        {/* name: '',                // text */}
        <label>
          <textarea name="name" value={form.name} onChange={onChange} placeholder="Anything else you'd like to add?"/>
        </label>

      </div>
      
      <div>
        <input type="number" />
        <button>Add to Order $17.99</button>
      </div>
    </Div>
  );
};

export default Modal;