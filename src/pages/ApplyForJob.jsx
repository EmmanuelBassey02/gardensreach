// import React, { useState } from 'react';
// import { ArrowRight, Upload, Check, AlertCircle } from 'lucide-react';

// const ApplyForJob = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     position: '',
//     experience: '',
//     portfolio: '',
//     resume: null,
//     coverLetter: '',
//     skills: [],
//     availability: '',
//     heardFrom: '',
//     agreeToTerms: false
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const positions = [
//     "Software Developer",
//     "Mobile App Developer",
//     "UI/UX Designer",
//     "API Developer",
//     "Data Analyst",
//     "Software Maintenance Engineer"
//   ];

//   const skillOptions = [
//     "JavaScript", "React", "Node.js", "Python", "UI/UX Design", 
//     "Mobile Development", "API Development", "Data Analysis", 
//     "DevOps", "Cloud Services"
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
    
//     if (type === 'checkbox') {
//       setFormData(prev => ({ ...prev, [name]: checked }));
//     } else if (type === 'file') {
//       setFormData(prev => ({ ...prev, [name]: files[0] }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
    
//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: null }));
//     }
//   };

//   const handleSkillChange = (skill) => {
//     setFormData(prev => {
//       const updatedSkills = prev.skills.includes(skill)
//         ? prev.skills.filter(s => s !== skill)
//         : [...prev.skills, skill];
//       return { ...prev, skills: updatedSkills };
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
    
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     if (!formData.position) newErrors.position = "Position is required";
//     if (!formData.experience) newErrors.experience = "Experience level is required";
//     if (!formData.resume) newErrors.resume = "Resume is required";
//     if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required";
//     if (formData.skills.length === 0) newErrors.skills = "Select at least one skill";
//     if (!formData.availability) newErrors.availability = "Availability is required";
//     if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
    
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
      
//       // Reset form after submission
//       setTimeout(() => {
//         window.scrollTo(0, 0);
//       }, 1000);
//     }, 2000);
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-black py-16 px-4 md:px-8 lg:px-16 flex items-center justify-center">
//         <div className="bg-gray-900 rounded-3xl p-8 md:p-12 max-w-3xl w-full border border-gray-800 text-center">
//           <div className="w-20 h-20 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
//             <Check className="w-10 h-10 text-lime-400" />
//           </div>
//           <h2 className="text-white text-3xl font-bold mb-4">Application Submitted!</h2>
//           <p className="text-gray-400 mb-8">
//             Thank you for your interest in joining our team. We've received your application and will review it shortly.
//             Our team will contact you if your qualifications match our requirements.
//           </p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="inline-flex items-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg py-3 px-6 group"
//           >
//             <span className="text-white mr-2">Submit Another Application</span>
//             <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             We're looking for talented individuals to help us build amazing software solutions.
//             Fill out the form below to apply for one of our open positions.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-gray-900 rounded-3xl p-6 md:p-10 border border-gray-800">
//           {/* Personal Information */}
//           <div className="mb-10">
//             <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
//               <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
//               Personal Information
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.firstName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//                 {errors.firstName && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.firstName}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.lastName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//                 {errors.lastName && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.lastName}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-white mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//                 {errors.email && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.email}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//                 {errors.phone && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.phone}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
          
//           {/* Job Information */}
//           <div className="mb-10">
//             <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
//               <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
//               Job Information
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label htmlFor="position" className="block text-white mb-2">Position</label>
//                 <select
//                   id="position"
//                   name="position"
//                   value={formData.position}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.position ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 >
//                   <option value="">Select a position</option>
//                   {positions.map(position => (
//                     <option key={position} value={position}>{position}</option>
//                   ))}
//                 </select>
//                 {errors.position && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.position}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="experience" className="block text-white mb-2">Experience Level</label>
//                 <select
//                   id="experience"
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.experience ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 >
//                   <option value="">Select experience level</option>
//                   <option value="Entry Level">Entry Level (0-2 years)</option>
//                   <option value="Mid Level">Mid Level (3-5 years)</option>
//                   <option value="Senior">Senior (5+ years)</option>
//                   <option value="Lead">Lead/Manager (7+ years)</option>
//                 </select>
//                 {errors.experience && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.experience}
//                   </p>
//                 )}
//               </div>
//             </div>
            
//             <div className="mb-6">
//               <label htmlFor="portfolio" className="block text-white mb-2">Portfolio URL (optional)</label>
//               <input
//                 type="url"
//                 id="portfolio"
//                 name="portfolio"
//                 value={formData.portfolio}
//                 onChange={handleChange}
//                 placeholder="https://yourportfolio.com"
//                 className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50"
//               />
//             </div>
            
//             <div className="mb-6">
//               <label htmlFor="resume" className="block text-white mb-2">Resume</label>
//               <div className={`w-full bg-gray-800 border ${errors.resume ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-6 text-white focus-within:ring-2 focus-within:ring-lime-400/50`}>
//                 <div className="flex flex-col items-center">
//                   <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-3">
//                     <Upload className="w-6 h-6 text-lime-400" />
//                   </div>
//                   <p className="text-white mb-1">
//                     {formData.resume ? formData.resume.name : 'Drag and drop your resume here'}
//                   </p>
//                   <p className="text-gray-500 text-sm mb-3">
//                     {!formData.resume && 'PDF, DOCX or TXT (max 5MB)'}
//                   </p>
//                   <label htmlFor="resume-upload" className="cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg py-2 px-4 text-white">
//                     Browse Files
//                   </label>
//                   <input
//                     type="file"
//                     id="resume-upload"
//                     name="resume"
//                     onChange={handleChange}
//                     accept=".pdf,.docx,.doc,.txt"
//                     className="hidden"
//                   />
//                 </div>
//               </div>
//               {errors.resume && (
//                 <p className="mt-2 text-red-500 flex items-center text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" /> {errors.resume}
//                 </p>
//               )}
//             </div>
            
//             <div>
//               <label htmlFor="coverLetter" className="block text-white mb-2">Cover Letter</label>
//               <textarea
//                 id="coverLetter"
//                 name="coverLetter"
//                 value={formData.coverLetter}
//                 onChange={handleChange}
//                 rows="5"
//                 placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
//                 className={`w-full bg-gray-800 border ${errors.coverLetter ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//               ></textarea>
//               {errors.coverLetter && (
//                 <p className="mt-2 text-red-500 flex items-center text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" /> {errors.coverLetter}
//                 </p>
//               )}
//             </div>
//           </div>
          
//           {/* Skills & Availability */}
//           <div className="mb-10">
//             <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
//               <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
//               Skills & Availability
//             </h2>
            
//             <div className="mb-6">
//               <label className="block text-white mb-3">Skills (select all that apply)</label>
//               <div className={`flex flex-wrap gap-3 ${errors.skills ? 'pb-2 border-b border-red-500' : ''}`}>
//                 {skillOptions.map(skill => (
//                   <button
//                     type="button"
//                     key={skill}
//                     onClick={() => handleSkillChange(skill)}
//                     className={`px-4 py-2 rounded-full text-sm ${
//                       formData.skills.includes(skill)
//                         ? 'bg-lime-400 text-black'
//                         : 'bg-gray-800 text-white border border-gray-700 hover:border-gray-600'
//                     } transition-colors`}
//                   >
//                     {skill}
//                   </button>
//                 ))}
//               </div>
//               {errors.skills && (
//                 <p className="mt-2 text-red-500 flex items-center text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" /> {errors.skills}
//                 </p>
//               )}
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="availability" className="block text-white mb-2">Availability</label>
//                 <select
//                   id="availability"
//                   name="availability"
//                   value={formData.availability}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.availability ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 >
//                   <option value="">Select availability</option>
//                   <option value="Immediately">Immediately</option>
//                   <option value="2 weeks">2 weeks notice</option>
//                   <option value="1 month">1 month notice</option>
//                   <option value="More than 1 month">More than 1 month</option>
//                 </select>
//                 {errors.availability && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.availability}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="heardFrom" className="block text-white mb-2">How did you hear about us?</label>
//                 <select
//                   id="heardFrom"
//                   name="heardFrom"
//                   value={formData.heardFrom}
//                   onChange={handleChange}
//                   className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50"
//                 >
//                   <option value="">Select an option</option>
//                   <option value="Job Board">Job Board</option>
//                   <option value="Company Website">Company Website</option>
//                   <option value="Social Media">Social Media</option>
//                   <option value="Referral">Referral</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//             </div>
//           </div>
          
//           {/* Terms & Submit */}
//           <div className="border-t border-gray-800 pt-8">
//             <div className="mb-8">
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="agreeToTerms"
//                     name="agreeToTerms"
//                     type="checkbox"
//                     checked={formData.agreeToTerms}
//                     onChange={handleChange}
//                     className="w-4 h-4 bg-gray-800 border-gray-700 rounded text-lime-400 focus:ring-lime-400/50"
//                   />
//                 </div>
//                 <div className="ml-3">
//                   <label htmlFor="agreeToTerms" className={`text-sm ${errors.agreeToTerms ? 'text-red-500' : 'text-gray-400'}`}>
//                     I agree to the <a href="#" className="text-lime-400 hover:underline">Terms of Service</a> and <a href="#" className="text-lime-400 hover:underline">Privacy Policy</a>
//                   </label>
//                   {errors.agreeToTerms && (
//                     <p className="mt-1 text-red-500 flex items-center text-sm">
//                       <AlertCircle className="w-4 h-4 mr-1" /> {errors.agreeToTerms}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors ${
//                 isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Submitting Application...
//                 </>
//               ) : (
//                 <>
//                   Submit Application
//                   <ArrowRight className="w-5 h-5 ml-2" />
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplyForJob;








// import React, { useState, useRef } from 'react';
// import { ArrowRight, Check, AlertCircle, DollarSign, Lock } from 'lucide-react';
// import emailjs from '@emailjs/browser';
// import Navbar from '../components/shared/Navbar';
// import herobg from '../assets/herobg.jpg';
// import '../components/Home/styles/Section1.css';

// const JobApplicationForm = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     // Personal Information
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
    
//     // Job Information
//     position: '',
//     experience: '',
//     portfolio: '',
//     availability: '',
    
//     // Account Details for Payment
//     accountName: '',
//     accountNumber: '',
//     routingNumber: '',
    
//     // SSN
//     ssn: '',
    
//     // Terms
//     agreeToTerms: false
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const positions = [
//     "Software Developer",
//     "Mobile App Developer",
//     "UI/UX Designer",
//     "API Developer",
//     "Data Analyst",
//     "Software Maintenance Engineer"
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     if (type === 'checkbox') {
//       setFormData(prev => ({ ...prev, [name]: checked }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
    
//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: null }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     // Validate Personal Information
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
    
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
//     // Validate Job Information
//     if (!formData.position) newErrors.position = "Position is required";
//     if (!formData.experience) newErrors.experience = "Experience level is required";
//     if (!formData.availability) newErrors.availability = "Availability is required";
    
//     // Validate Account Details
//     if (!formData.accountName.trim()) newErrors.accountName = "Account name is required";
//     if (!formData.accountNumber.trim()) newErrors.accountNumber = "Account number is required";
//     if (!formData.routingNumber.trim()) {
//       newErrors.routingNumber = "Routing number is required";
//     } else if (!/^\d{9}$/.test(formData.routingNumber)) {
//       newErrors.routingNumber = "Routing number must be 9 digits";
//     }
    
//     // Validate SSN
//     if (!formData.ssn.trim()) {
//       newErrors.ssn = "Social Security Number is required";
//     } else if (!/^\d{3}-?\d{2}-?\d{4}$/.test(formData.ssn)) {
//       newErrors.ssn = "SSN must be in format XXX-XX-XXXX";
//     }
    
//     // Validate Terms
//     if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
    
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // EmailJS implementation
//     const templateParams = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       phone: formData.phone,
//       position: formData.position,
//       experience: formData.experience,
//       portfolio: formData.portfolio,
//       availability: formData.availability,
//       accountName: formData.accountName,
//       accountNumber: formData.accountNumber,
//       routingNumber: formData.routingNumber,
//       ssn: formData.ssn
//     };

//     // Replace with your actual EmailJS service ID, template ID, and user ID
//     emailjs.send(
//       'YOUR_SERVICE_ID',
//       'YOUR_TEMPLATE_ID',
//       templateParams,
//       'YOUR_USER_ID'
//     )
//     .then((response) => {
//       console.log('SUCCESS!', response.status, response.text);
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//     }, (error) => {
//       console.log('FAILED...', error);
//       setIsSubmitting(false);
//       alert('Failed to submit application. Please try again.');
//     });
//   };

//   if (isSubmitted) {
//     return (
      
//       <div className="min-h-screen bg-black py-16 px-4 md:px-8 lg:px-16 flex items-center justify-center">
//         <div className="bg-gray-900 rounded-3xl p-8 md:p-12 max-w-3xl w-full border border-gray-800 text-center">
//           <div className="w-20 h-20 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
//             <Check className="w-10 h-10 text-lime-400" />
//           </div>
//           <h2 className="text-white text-3xl font-bold mb-4">Application Submitted!</h2>
//           <p className="text-gray-400 mb-8">
//             Thank you for your interest in joining our team. We've received your application and will review it shortly.
//             Our team will contact you if your qualifications match our requirements.
//           </p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="inline-flex items-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg py-3 px-6 group"
//           >
//             <span className="text-white mr-2">Submit Another Application</span>
//             <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//     <Navbar />
//     <div className="applybg bg-fixed min-h-screen bg-black py-16 px-4 md:px-8 lg:px-16" style={{ backgroundImage: `url(${herobg})` }}>
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
//           <p className="text-gray-300 max-w-2xl mx-auto md:text-lg text-base">
//             We're looking for talented individuals to help us build amazing software solutions.
//             Fill out the form below to apply for one of our open positions.
//           </p>
//         </div>

//         <form ref={form} onSubmit={handleSubmit} className="bg-[#142401] rounded-3xl p-6 md:p-10 border border-gray-800">
//            <div className='flex gap-3'>
//              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//              <p className='text-neutral-500 mb-8'><em>This form is encrypted!</em></p>
//            </div>

//             <p className='text-neutral-400  md:text-[15px] text-sm mb-8 leading-7'>
//             Email your resume to <span className='font-bold text-white'><a href='mailto:gardensreach@gmail.com'>gardensreach@gmail.com</a></span>. Must also include a copy of your Driver's license or ID card issued by a State or outlying possession of the United States provided it contains a photograph or information such as name, date of birth, sex, height, eye color, and address. 
//             </p>
          
//           {/* Personal Information */}
//           <div className="mb-10">
//             <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
//               <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
//               Personal Information
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className={`w-full bg-lime-950 border ${errors.firstName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//                 {errors.firstName && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.firstName}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className={`w-full bg-lime-950 border ${errors.lastName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//                 {errors.lastName && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.lastName}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-white mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full bg-lime-950 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//                 {errors.email && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.email}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full bg-lime-950 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//                 {errors.phone && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.phone}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
          
//           {/* Job Information */}
//           <div className="mb-10">
//             <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
//               <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
//               Job Information
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label htmlFor="position" className="block text-white mb-2">Position</label>
//                 <select
//                   id="position"
//                   name="position"
//                   value={formData.position}
//                   onChange={handleChange}
//                   className={`w-full bg-lime-950 border ${errors.position ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 >
//                   <option value="">Select a position</option>
//                   {positions.map(position => (
//                     <option key={position} value={position}>{position}</option>
//                   ))}
//                 </select>
//                 {errors.position && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.position}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="experience" className="block text-white mb-2">Experience Level</label>
//                 <select
//                   id="experience"
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   className={`w-full bg-lime-950 border ${errors.experience ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 >
//                   <option value="">Select experience level</option>
//                   <option value="Entry Level">Entry Level (0-2 years)</option>
//                   <option value="Mid Level">Mid Level (3-5 years)</option>
//                   <option value="Senior">Senior (5+ years)</option>
//                   <option value="Lead">Lead/Manager (7+ years)</option>
//                 </select>
//                 {errors.experience && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.experience}
//                   </p>
//                 )}
//               </div>
//             </div>
            
//             <div className="mb-6">
//               <label htmlFor="portfolio" className="block text-white mb-2">Portfolio URL (optional)</label>
//               <input
//                 type="url"
//                 id="portfolio"
//                 name="portfolio"
//                 value={formData.portfolio}
//                 onChange={handleChange}
//                 placeholder="https://yourportfolio.com"
//                 className="w-full bg-lime-950 border placeholder:text-neutral-400 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="availability" className="block text-white mb-2">Availability</label>
//               <select
//                 id="availability"
//                 name="availability"
//                 value={formData.availability}
//                 onChange={handleChange}
//                 className={`w-full bg-lime-950 border ${errors.availability ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//               >
//                 <option value="">Select availability</option>
//                 <option value="Immediately">Immediately</option>
//                 <option value="2 weeks">2 weeks notice</option>
//                 <option value="1 month">1 month notice</option>
//                 <option value="More than 1 month">More than 1 month</option>
//               </select>
//               {errors.availability && (
//                 <p className="mt-2 text-red-500 flex items-center text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" /> {errors.availability}
//                 </p>
//               )}
//             </div>
//           </div>
          
//           {/* Account Details for Payment */}
//           <div className="mb-10">
//             <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
//               <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
//               Account Details for Payment
//             </h2>
            
//             <div className="mb-6">
//               <label htmlFor="accountName" className="block text-white mb-2">Account Name</label>
//               <input
//                 type="text"
//                 id="accountName"
//                 name="accountName"
//                 value={formData.accountName}
//                 onChange={handleChange}
//                 className={`w-full bg-lime-950 border ${errors.accountName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//               />
//               {errors.accountName && (
//                 <p className="mt-2 text-red-500 flex items-center text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" /> {errors.accountName}
//                 </p>
//               )}
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label htmlFor="accountNumber" className="block text-white mb-2">Account Number</label>
//                 <div className="relative">
//                   {/* <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" /> */}
//                   <input
//                     type="text"
//                     id="accountNumber"
//                     name="accountNumber"
//                     value={formData.accountNumber}
//                     onChange={handleChange}
//                     className={`w-full bg-lime-950 border ${errors.accountNumber ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                   />
//                 </div>
//                 {errors.accountNumber && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.accountNumber}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label htmlFor="routingNumber" className="block text-white mb-2">Routing Number (9-digit)</label>
//                 <input
//                   type="text"
//                   id="routingNumber"
//                   name="routingNumber"
//                   value={formData.routingNumber}
//                   onChange={handleChange}
//                   maxLength="9"
//                   className={`w-full  bg-lime-950 border ${errors.routingNumber ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//                 {errors.routingNumber && (
//                   <p className="mt-2 text-red-500 flex items-center text-sm">
//                     <AlertCircle className="w-4 h-4 mr-1" /> {errors.routingNumber}
//                   </p>
//                 )}
//               </div>
//             </div>
            
//             <div className="mb-6">
//               <label htmlFor="ssn" className="block text-white mb-2">Social Security Number (SSN)</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//                 <input
//                   type="text"
//                   id="ssn"
//                   name="ssn"
//                   value={formData.ssn}
//                   onChange={handleChange}
//                   placeholder="XXX-XX-XXXX"
//                   className={`w-full placeholder:text-neutral-400 bg-lime-950 border ${errors.ssn ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
//                 />
//               </div>
//               {errors.ssn && (
//                 <p className="mt-2 text-red-500 flex items-center text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" /> {errors.ssn}
//                 </p>
//               )}
//               <p className="mt-2 text-gray-400 text-xs">Your SSN is required for tax purposes and will be kept secure.</p>
//             </div>
//           </div>
          
//           {/* Terms & Submit */}
//           <div className="border-t border-gray-800 pt-8">
//             <div className="mb-8">
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="agreeToTerms"
//                     name="agreeToTerms"
//                     type="checkbox"
//                     checked={formData.agreeToTerms}
//                     onChange={handleChange}
//                     className="w-4 h-4 bg-gray-800 border-gray-700 rounded text-lime-400 focus:ring-lime-400/50"
//                   />
//                 </div>
//                 <div className="ml-3">
//                   <label htmlFor="agreeToTerms" className={`text-sm ${errors.agreeToTerms ? 'text-red-500' : 'text-gray-400'}`}>
//                     I agree to the <a href="#" className="text-lime-400 hover:underline">Terms of Service</a> and <a href="#" className="text-lime-400 hover:underline">Privacy Policy</a>
//                   </label>
//                   {errors.agreeToTerms && (
//                     <p className="mt-1 text-red-500 flex items-center text-sm">
//                       <AlertCircle className="w-4 h-4 mr-1" /> {errors.agreeToTerms}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors ${
//                 isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Submitting Application...
//                 </>
//               ) : (
//                 <>
//                   Submit Application
//                   <ArrowRight className="w-5 h-5 ml-2" />
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };

// export default JobApplicationForm;























import React, { useState, useRef } from 'react';
import { ArrowRight, Check, AlertCircle, DollarSign, Lock, Globe, Clock, Phone, Wifi, Laptop, Printer } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/shared/Navbar';
import herobg from '../assets/herobg.jpg';
import '../components/Home/styles/Section1.css';

const JobApplicationForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Work Preferences
    currentLocation: '',
    timeZone: '',
    whatsappNumber: '',
    remoteWork: '',
    communicationMethod: '',
    employmentType: '',
    clientExperience: '',
    referralSource: '',
    hasReliableInternet: false,
    hasComputer: false,
    hasPrinterScanner: false,
    
    // Job Information
    position: '',
    experience: '',
    portfolio: '',
    availability: '',
    
    // Account Details for Payment
    accountName: '',
    accountNumber: '',
    routingNumber: '',
    
    // SSN
    ssn: '',
    
    // Terms
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const positions = [
    "Software Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "API Developer",
    "Data Analyst",
    "Software Maintenance Engineer"
  ];

  const timeZones = [
    "UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", 
    "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00", "UTC-01:00",
    "UTC+00:00", "UTC+01:00", "UTC+02:00", "UTC+03:00", "UTC+04:00", "UTC+05:00",
    "UTC+06:00", "UTC+07:00", "UTC+08:00", "UTC+09:00", "UTC+10:00", "UTC+11:00",
    "UTC+12:00", "UTC+13:00", "UTC+14:00"
  ];

  const communicationMethods = [
    "Email",
    "Phone",
    "WhatsApp",
    "Slack",
    "Microsoft Teams",
    "Zoom",
    "Other"
  ];

  const employmentTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance"
  ];

  const referralSources = [
    "Job Board",
    "Company Website",
    "LinkedIn",
    "Referral",
    "Social Media",
    "Search Engine",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate Personal Information
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
    // Validate Work Preferences
    if (!formData.currentLocation.trim()) newErrors.currentLocation = "Current location is required";
    if (!formData.timeZone) newErrors.timeZone = "Time zone is required";
    if (!formData.remoteWork) newErrors.remoteWork = "Please indicate if you're comfortable working remotely";
    if (!formData.employmentType) newErrors.employmentType = "Employment type is required";
    if (!formData.clientExperience) newErrors.clientExperience = "Please indicate if you have client experience";
    if (!formData.referralSource) newErrors.referralSource = "Please tell us how you heard about us";
    
    // Validate Job Information
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.experience) newErrors.experience = "Experience level is required";
    if (!formData.availability) newErrors.availability = "Availability is required";
    
    // Validate Account Details
    if (!formData.accountName.trim()) newErrors.accountName = "Account name is required";
    if (!formData.accountNumber.trim()) newErrors.accountNumber = "Account number is required";
    if (!formData.routingNumber.trim()) {
      newErrors.routingNumber = "Routing number is required";
    } else if (!/^\d{9}$/.test(formData.routingNumber)) {
      newErrors.routingNumber = "Routing number must be 9 digits";
    }
    
    // Validate SSN
    if (!formData.ssn.trim()) {
      newErrors.ssn = "Social Security Number is required";
    } else if (!/^\d{3}-?\d{2}-?\d{4}$/.test(formData.ssn)) {
      newErrors.ssn = "SSN must be in format XXX-XX-XXXX";
    }
    
    // Validate Terms
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // EmailJS implementation
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      experience: formData.experience,
      portfolio: formData.portfolio,
      availability: formData.availability,
      currentLocation: formData.currentLocation,
      timeZone: formData.timeZone,
      whatsappNumber: formData.whatsappNumber,
      remoteWork: formData.remoteWork,
      communicationMethod: formData.communicationMethod,
      employmentType: formData.employmentType,
      clientExperience: formData.clientExperience,
      referralSource: formData.referralSource,
      hasReliableInternet: formData.hasReliableInternet ? 'Yes' : 'No',
      hasComputer: formData.hasComputer ? 'Yes' : 'No',
      hasPrinterScanner: formData.hasPrinterScanner ? 'Yes' : 'No',
      accountName: formData.accountName,
      accountNumber: formData.accountNumber,
      routingNumber: formData.routingNumber,
      ssn: formData.ssn
    };

    // Replace with your actual EmailJS service ID, template ID, and user ID
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, (error) => {
      console.log('FAILED...', error);
      setIsSubmitting(false);
      alert('Failed to submit application. Please try again.');
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black py-16 px-4 md:px-8 lg:px-16 flex items-center justify-center">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 max-w-3xl w-full border border-gray-800 text-center">
          <div className="w-20 h-20 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-lime-400" />
          </div>
          <h2 className="text-white text-3xl font-bold mb-4">Application Submitted!</h2>
          <p className="text-gray-400 mb-8">
            Thank you for your interest in joining our team. We've received your application and will review it shortly.
            Our team will contact you if your qualifications match our requirements.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="inline-flex items-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg py-3 px-6 group"
          >
            <span className="text-white mr-2">Submit Another Application</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <div className="applybg bg-fixed min-h-screen bg-black py-16 px-4 md:px-8 lg:px-16" style={{ backgroundImage: `url(${herobg})` }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're looking for talented individuals to help us build amazing software solutions.
            Fill out the form below to apply for one of our open positions.
          </p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="bg-[#142401] rounded-3xl p-6 md:p-10 border border-gray-800">
          {/* Personal Information */}
          <div className="mb-10">
            <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full bg-lime-950 border ${errors.firstName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                />
                {errors.firstName && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.firstName}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full bg-lime-950 border ${errors.lastName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                />
                {errors.lastName && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.lastName}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-lime-950 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                />
                {errors.email && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.email}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-lime-950 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                />
                {errors.phone && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Work Preferences */}
          <div className="mb-10">
            <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
              Work Preferences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="currentLocation" className="block text-white mb-2">Current Location</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    id="currentLocation"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    placeholder="City, Country"
                    className={`w-full bg-lime-950 border ${errors.currentLocation ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                  />
                </div>
                {errors.currentLocation && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.currentLocation}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="timeZone" className="block text-white mb-2">Time Zone</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <select
                    id="timeZone"
                    name="timeZone"
                    value={formData.timeZone}
                    onChange={handleChange}
                    className={`w-full bg-lime-950 border ${errors.timeZone ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                  >
                    <option value="">Select your time zone</option>
                    {timeZones.map(zone => (
                      <option key={zone} value={zone}>{zone}</option>
                    ))}
                  </select>
                </div>
                {errors.timeZone && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.timeZone}
                  </p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="whatsappNumber" className="block text-white mb-2">WhatsApp Business Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder="Include country code (e.g., +1 555 123 4567)"
                  className="w-full bg-lime-950 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50"
                />
              </div>
              <p className="mt-1 text-gray-400 text-xs">Optional, but preferred for business communication</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="remoteWork" className="block text-white mb-2">Are you comfortable working remotely?</label>
                <select
                  id="remoteWork"
                  name="remoteWork"
                  value={formData.remoteWork}
                  onChange={handleChange}
                  className={`w-full bg-lime-950 border ${errors.remoteWork ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Prefer hybrid">Prefer hybrid</option>
                </select>
                {errors.remoteWork && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.remoteWork}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="communicationMethod" className="block text-white mb-2">Preferred Communication Method</label>
                <select
                  id="communicationMethod"
                  name="communicationMethod"
                  value={formData.communicationMethod}
                  onChange={handleChange}
                  className="w-full bg-lime-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50"
                >
                  <option value="">Select preferred method</option>
                  {communicationMethods.map(method => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="employmentType" className="block text-white mb-2">Are you applying for:</label>
                <select
                  id="employmentType"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className={`w-full bg-lime-950 border ${errors.employmentType ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                >
                  <option value="">Select employment type</option>
                  {employmentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.employmentType && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.employmentType}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="clientExperience" className="block text-white mb-2">Do you have experience working directly with clients?</label>
                <select
                  id="clientExperience"
                  name="clientExperience"
                  value={formData.clientExperience}
                  onChange={handleChange}
                  className={`w-full bg-lime-950 border ${errors.clientExperience ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                >
                  <option value="">Select an option</option>
                  <option value="Yes, extensive">Yes, extensive experience</option>
                  <option value="Yes, some">Yes, some experience</option>
                  <option value="No">No experience</option>
                </select>
                {errors.clientExperience && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.clientExperience}
                  </p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="referralSource" className="block text-white mb-2">How did you hear about us?</label>
              <select
                id="referralSource"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className={`w-full bg-lime-950 border ${errors.referralSource ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
              >
                <option value="">Select an option</option>
                {referralSources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
              {errors.referralSource && (
                <p className="mt-2 text-red-500 flex items-center text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.referralSource}
                </p>
              )}
            </div>
            
            <div className="bg-lime-950/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-white text-lg font-medium mb-4">Do you have access to the following:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="hasReliableInternet"
                      name="hasReliableInternet"
                      type="checkbox"
                      checked={formData.hasReliableInternet}
                      onChange={handleChange}
                      className="w-4 h-4 bg-gray-800 border-gray-700 rounded text-lime-400 focus:ring-lime-400/50"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="hasReliableInternet" className="text-white flex items-center">
                      <Wifi className="w-5 h-5 mr-2 text-lime-400" /> Reliable Internet Connection
                    </label>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="hasComputer"
                      name="hasComputer"
                      type="checkbox"
                      checked={formData.hasComputer}
                      onChange={handleChange}
                      className="w-4 h-4 bg-gray-800 border-gray-700 rounded text-lime-400 focus:ring-lime-400/50"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="hasComputer" className="text-white flex items-center">
                      <Laptop className="w-5 h-5 mr-2 text-lime-400" /> Computer/Desktop
                    </label>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="hasPrinterScanner"
                      name="hasPrinterScanner"
                      type="checkbox"
                      checked={formData.hasPrinterScanner}
                      onChange={handleChange}
                      className="w-4 h-4 bg-gray-800 border-gray-700 rounded text-lime-400 focus:ring-lime-400/50"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="hasPrinterScanner" className="text-white flex items-center">
                      <Printer className="w-5 h-5 mr-2 text-lime-400" /> Printer/Scanner
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Job Information */}
          <div className="mb-10">
            <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
              Job Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="position" className="block text-white mb-2">Position</label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={`w-full bg-lime-950 border ${errors.position ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                >
                  <option value="">Select a position</option>
                  {positions.map(position => (
                    <option key={position} value={position}>{position}</option>
                  ))}
                </select>
                {errors.position && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.position}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-white mb-2">Experience Level</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={`w-full bg-lime-950 border ${errors.experience ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                >
                  <option value="">Select experience level</option>
                  <option value="Entry Level">Entry Level (0-2 years)</option>
                  <option value="Mid Level">Mid Level (3-5 years)</option>
                  <option value="Senior">Senior (5+ years)</option>
                  <option value="Lead">Lead/Manager (7+ years)</option>
                </select>
                {errors.experience && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.experience}
                  </p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="portfolio" className="block text-white mb-2">Portfolio URL (optional)</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
                className="w-full bg-lime-950 border placeholder:text-neutral-400 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50"
              />
            </div>
            
            <div>
              <label htmlFor="availability" className="block text-white mb-2">Availability</label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className={`w-full bg-lime-950 border ${errors.availability ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
              >
                <option value="">Select availability</option>
                <option value="Immediately">Immediately</option>
                <option value="2 weeks">2 weeks notice</option>
                <option value="1 month">1 month notice</option>
                <option value="More than 1 month">More than 1 month</option>
              </select>
              {errors.availability && (
                <p className="mt-2 text-red-500 flex items-center text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.availability}
                </p>
              )}
            </div>
          </div>
          
          {/* Account Details for Payment */}
          <div className="mb-10">
            <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
              Account Details for Payment
            </h2>
            
            <div className="mb-6">
              <label htmlFor="accountName" className="block text-white mb-2">Account Name</label>
              <input
                type="text"
                id="accountName"
                name="accountName"
                value={formData.accountName}
                onChange={handleChange}
                className={`w-full bg-lime-950 border ${errors.accountName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
              />
              {errors.accountName && (
                <p className="mt-2 text-red-500 flex items-center text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.accountName}
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="accountNumber" className="block text-white mb-2">Account Number</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className={`w-full bg-lime-950 border ${errors.accountNumber ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                  />
                </div>
                {errors.accountNumber && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.accountNumber}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="routingNumber" className="block text-white mb-2">Routing Number (9-digit)</label>
                <input
                  type="text"
                  id="routingNumber"
                  name="routingNumber"
                  value={formData.routingNumber}
                  onChange={handleChange}
                  maxLength="9"
                  placeholder="123456789"
                  className={`w-full bg-lime-950 border ${errors.routingNumber ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                />
                {errors.routingNumber && (
                  <p className="mt-2 text-red-500 flex items-center text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" /> {errors.routingNumber}
                  </p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="ssn" className="block text-white mb-2">Social Security Number (SSN)</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  id="ssn"
                  name="ssn"
                  value={formData.ssn}
                  onChange={handleChange}
                  placeholder="XXX-XX-XXXX"
                  className={`w-full bg-lime-950 border ${errors.ssn ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50`}
                />
              </div>
              {errors.ssn && (
                <p className="mt-2 text-red-500 flex items-center text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.ssn}
                </p>
              )}
              <p className="mt-2 text-gray-400 text-xs">Your SSN is required for tax purposes and will be kept secure.</p>
            </div>
          </div>
          
          {/* Terms & Submit */}
          <div className="border-t border-gray-800 pt-8">
            <div className="mb-8">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 bg-gray-800 border-gray-700 rounded text-lime-400 focus:ring-lime-400/50"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="agreeToTerms" className={`text-sm ${errors.agreeToTerms ? 'text-red-500' : 'text-gray-400'}`}>
                    I agree to the <a href="#" className="text-lime-400 hover:underline">Terms of Service</a> and <a href="#" className="text-lime-400 hover:underline">Privacy Policy</a>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-red-500 flex items-center text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.agreeToTerms}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting Application...
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default JobApplicationForm;