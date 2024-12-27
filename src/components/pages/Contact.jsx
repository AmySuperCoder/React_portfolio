import { Formik } from 'formik';
import React from 'react';


export default function Contact() {
  return (
    <div className='gradient'>
      <h1>Contact Me</h1>
      <p>
        Questions? Comments? Let me know!
      </p>

      <Formik
       initialValues={{name: '', email: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Email is required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.name) {
          errors.name = "Name is required."
         } 
         if (!values.message) {
          errors.message = "Message is required."
         }  
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        console.log(values)
          alert("Thank you for contacting me!");
       }}
      
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
        <div>
        <div>
            <label>Email:    </label>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             className='input'
           /></div>
           {errors.email && touched.email && errors.email}
        </div>
        <div>
        <div>
            <label>Name:    </label>
           <input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
             className='input'
           /></div>
           {errors.name && touched.name && errors.name}
        </div>
        <div>
        <div>
            <label>Message: </label>
           <textarea
      
             name="message"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}
             className='message'
           /></div>
           {errors.message && touched.message && errors.message}
        </div>
           
           <button type="submit" disabled={isSubmitting} className='button'>
             Submit
           </button>
         </form>
       )}
     </Formik>




    </div>
  );
}


// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., sending data to an API)
//     console.log('Form submitted:', formData);
//     // Reset form after submission
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ContactForm;