
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import styles from './page.module.css'
import { Link } from "react-router-dom";

export default function Home() {
	const [isMutating, setIsMutating] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const { register, handleSubmit, setError, clearErrors, setValue, reset, formState: { isSubmitting, errors } } = useForm();

	const onSubmit = async (data) => {
		setIsMutating(true);
	}
	return (
		<div className={styles.login_bg}>
			<div className={styles.login_left}></div>
			<div className={styles.login_wrapper}>
				<div className={styles.login_right_container}>
					<div className={styles.login_box}>
						<div className={styles.login_logo}>
							{/* <img src=""  alt="logo" width={201} height={55} sizes="(2x)" /> */}
                            logo
						</div>
						<div className={styles.login_top}>
							<h2>Welcome back !</h2>
							<p>Please enter your details to login</p>
						</div>
						<form method='POST' className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
							<div className={styles.login_input}>
								<label htmlFor="email" className={styles.login_label}>Email</label>
								<input
									{...register("email", { required: "This field is required", maxLength: 150, minLength: 2 })}
									defaultValue=""
									id="email"
									name="email"
									type="email"
									className="input_feild"
									placeholder="Email"
									autoComplete="off"
								/>
								{errors.email && errors.email.type == "required" &&
									<p className='text-danger'>
										{errors.email.message}
									</p>
								}
								{errors.email && errors.email.type === "maxLength" &&
									<p className='text-danger'>Please shorten this text to 150 characters or less</p>
								}
								{errors.email && errors.email.type === "minLength" &&
									<p className='text-danger'>Please lengthen this text to 2 characters or more</p>
								}
								{/* <input id="email" name="email" type="email" autoComplete="email" required onChange={(e) => setData((data) => ({ ...data, email: e.target.value, }))} value={data?.email} /> */}
							</div>

							<div className={styles.login_input}>
								<label htmlFor="password" className={styles.login_label}>Password</label>
								<div className={styles.input_relative}>
									<input
										{...register("password", { required: "This field is required", maxLength: 150, minLength: 2 })}
										defaultValue=""
										id="password"
										name="password"
										type={showPassword ? "text" : "password"}
										className="input_feild"
										placeholder="Password"
										autoComplete="off"
									/>
									<span className={styles.password_toggle} onClick={() => setShowPassword(!showPassword)}>
										{showPassword ?
											<img src="/images/eye.svg" width={20} height={18} alt="icon" />
											:<img src="/images/eye-slash.svg" width={20} height={18} alt="icon" />
										}
									</span>
								</div>
								{errors.password && errors.password.type == "required" &&
									<p className='text-danger'>
										{errors.password.message}
									</p>
								}
								{errors.password && errors.password.type === "maxLength" &&
									<p className='text-danger'>Please shorten this text to 150 characters or less</p>
								}
								{errors.password && errors.password.type === "minLength" &&
									<p className='text-danger'>Please lengthen this text to 2 characters or more</p>
								}
								{/* <input id="password" name="password" type="password" autoComplete="current-password" required onChange={(e) =>setData((data) => ({...data, password: e.target.value,}))}
									value={data?.password}
								/> */}

							</div>

							<div className={styles.login_question}>
								<p>Forgot Password?
									<Link className={styles.login_qstn_link} tp="#" >
										&nbsp; Reset password
									</Link>
								</p>
							</div>

							<div className={styles.login_btn_wrapper}>
								{!isMutating ? (
									<Link to={'/dashboard'}><button className={`${styles.main_button} main_button`} type="submit">Log in</button></Link>
								) : (
									<button type="button" className={`${styles.main_button} main_button`}><div className="dot_pulse"></div></button>
								)}
							</div>
							<div className={styles.social_login}>
								<p>Or continue with</p>
								<div className={`${styles.social_btn_wrapper} d-flex align-items-center justify-content-center`}>
									{/* <button type='button'><img src="/images/google.png" width={22} height={22} alt="google" />Login with Google</button> */}
									<button type='button'><span className='icon-linkedin'></span>Login with Linkedin</button>
								</div>
							</div>
						</form>
						<div className={styles.register_link}>
							<p >Don’t have an account ? <Link to="/register">Register</Link></p>
						</div>
					</div>
				</div>
			</div >
		</div >
	)
}
