import React, { useEffect, useState } from 'react'
import styles from './layout.module.css'
import regStyle from './register.module.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Select from 'react-select';

export default function Register() {
  
  const [isMutating, setIsMutating] = useState(false);
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);


  const [isVerified, setIsverified] = useState(false);



  const { register, handleSubmit, setError, getValues, formState: { errors } } = useForm()



  // register basic details submit function
  const handleFormSubmit = async (data) => {

      
  }

  // react-hook-form error validation (add more cases if needed)
  const handleError = (error) => {
     
  }


  const options = [
    { value: 'value one', label: 'LoremIpsum' },
    { value: 'value two', label: 'LoremIpsum' },
    { value: 'value three', label: 'LoremIpsum' },
    { value: 'value four', label: 'LoremIpsum' },
    { value: 'value five', label: 'LoremIpsum' },
    { value: 'value six', label: 'LoremIpsum' },
    { value: 'value seven', label: 'LoremIpsum' },
    { value: 'value eight', label: 'LoremIpsum' },
    { value: 'value nine', label: 'LoremIpsum' }
  ]
  const phnNum = [
    { value: '+971', label: '+971' },
    { value: '+1', label: '+1' },
    { value: '+44', label: '+44' },
    { value: '+91', label: '+91' }
  ]
  return (
    <div className={styles.login_bg}>
      <div className={styles.login_left}>
      </div>
      <div className={styles.login_wrapper}>
        <div className={styles.login_right_container}>
          <div className={regStyle.prev_button}>
            <Link to={"/"}><button >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.5 12H3.67004" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg></button></Link>
          </div>
          <div className={styles.login_box}>
            <div className={styles.login_logo}>
              {/* <img src="" alt="logo" width={201} height={55} sizes="(2x)" /> */}
              logo
            </div>
            <div className={styles.login_top}>
              <h2>Create an account</h2>
              <p>Enter basic details below to start a new account</p>
            </div>

            <div>
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <ul className={regStyle.reg_input_wrapper}>
                  <li>
                    <div className={`${styles.login_input} ${regStyle.login_input}`}>
                      <label className={styles.login_label}>First Name</label>
                      <input {...register("firstName", { required: "This field is required", minLength: { value: 2, message: 'First name cannot be a single character.' } })} name="firstName" type="text" className={styles.input_feild} placeholder="First Name" />
                      {errors.firstName && <span className='error-msg'>*{errors.firstName?.message}</span>}
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.login_input} ${regStyle.login_input}`}>
                      <label className={styles.login_label}>Last Name</label>
                      <input  {...register("lastName", { required: "This field is required" })} name="lastName" type="text" className={styles.input_feild} placeholder="Last Name" />
                      {errors.lastName && <span className='error-msg'>*{errors.lastName?.message }</span>}
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.login_input} ${regStyle.login_input}`}>
                      <label className={styles.login_label}>Email Address*</label>
                      <input {...register("email", { required: "This field is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Please enter valid Email Address' } })} name="email" type="Email" className={styles.input_feild} placeholder="Enter email address" />
                      {errors.email && <span className='error-msg'>*{errors.email?.message }</span>}
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.login_input} ${regStyle.login_input}`}>
                      <label className={styles.login_label}>Mobile Number</label>
                      <div className={`${regStyle.phn_selector} phn_selector`}>
                        <Select
                          styles={
                            {
                              menu: (provided) => (
                                { ...provided, width: "100%", paddingTop: 0 }
                              ),
                              option: (provided, state) => (
                                { ...provided, backgroundColor: state.isSelected ? '#dddddd' : 'transparent', color: state.isSelected ? '#000000' : '#000000' }
                              ),
                              menuList: (provided) => (
                                { ...provided, padding: 0 }
                              )

                            }
                          }
                          instanceId={'mobile'}
                          isSearchable={false}
                          placeholder={<div> </div>}
                          defaultValue={phnNum[0]}
                        />
                        <input  {...register("mobile", { required: true, pattern: { value: /^[0-9]*$/, message: 'Enter a valid number' } })} name="mobile" type="tel" maxLength={9} className={`${styles.input_feild} ${regStyle.input_feild}`} placeholder="Mobile Number" />
                      </div>
                      {errors.mobile && <span className='error-msg'>*{ errors.mobile?.message}</span>}
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.login_input} `}>
                      <label htmlFor="password" className={styles.login_label} >Password</label>
                      <div className={styles.input_relative}>
                        <input {...register("password", { required: "This field is required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, message: "Enter a valid password" } })} name="password" type={showPasswordOne ? "text" : "password"} className={styles.input_feild} placeholder="Password" />
                        <span className={styles.password_toggle} onClick={() => setShowPasswordOne(!showPasswordOne)}>
                          {showPasswordOne ?
                            <img src="/images/eye.svg" width={20} height={18} alt="icon" />
                            : <img src="/images/eye-slash.svg" width={20} height={18} alt="icon" />
                          }
                        </span>
                      </div>
                      {errors.password && <span className='error-msg'>*{errors.password?.message}</span>}
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.login_input} `}>
                      <label htmlFor="confirmPassword" className={styles.login_label}>Confirm Password</label>
                      <div className={styles.input_relative}>
                        <input {...register("confirmPassword", { required: "This field is required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, message: "Enter a valid password" } })} name="confirmPassword" type={showPasswordTwo ? "text" : "password"} className={styles.input_feild} placeholder="Confirm Password" />
                        <span className={styles.password_toggle} onClick={() => setShowPasswordTwo(!showPasswordTwo)}>
                          {showPasswordTwo ?
                            <img src="/images/eye.svg" width={20} height={18} alt="icon" />
                            : <img src="/images/eye-slash.svg" width={20} height={18} alt="icon" />
                          }
                        </span>
                      </div>
                      {errors.confirmPassword && <span className='error-msg'>*{errors.confirmPassword?.message }</span>}
                    </div>
                  </li>
                </ul>
                <span className='note-text'>*The password must contain at least one uppercase and lowercase letter and must include a number and special characters.</span>

                <div className={styles.login_btn_wrapper}>
                  {!isMutating ? (
                    <button className={`${styles.main_button} main_button`} type="submit" >Continue</button>
                  ) : (
                    <button type="button" className={`${styles.main_button} main_button`}><div className="dot_pulse"></div></button>
                  )}

                </div>
              </form>
            </div>


          </div>
        </div >
      </div>
    </div>
  )
}
