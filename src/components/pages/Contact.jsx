import { Formik } from 'formik';
import React from 'react';


export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
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
            <label>Email: </label>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /></div>
           {errors.email && touched.email && errors.email}
        </div>
        <div>
        <div>
            <label>Name: </label>
           <input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
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
           /></div>
           {errors.message && touched.message && errors.message}
        </div>
           
           <button type="submit" disabled={isSubmitting}>
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