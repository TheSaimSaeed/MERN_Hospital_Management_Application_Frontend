import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AppointmentForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cnic, setCnic] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [appointment_date, setAppointment_date] = useState("");
    const [department, setDepartment] = useState("");
    const [doctor_firstName, setDoctor_firstName] = useState("");
    const [doctor_lastName, setDoctor_lastName] = useState("");
    const [hasVisited, setHasVisited] = useState(false);
    const [address, setAddress] = useState("");


    const departmentsArray = [
        "Pediatrics",
        "Orthopedics",
        "Cardiology",
        "Neurology",
        "Oncology",
        "Radiology",
        "Physical Therapy",
        "Dermatology",
        "ENT",
        "Nursing"
    ];

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            const { data } = await axios.get(
                "http://localhost:4000/api/v1/user/doctors",
                { withCredentials: true }
            );
            setDoctors(data.doctors);
            console.log(data.doctors);
        };
        fetchDoctors();
    }, []);

    const handleAppointment = async (e) => {
        e.preventDefault();
        try {
            
            const hasVisitedBool = Boolean(hasVisited);
            console.log({
                firstName,
                    lastName,
                    email,
                    phone,
                    cnic,
                    dob,
                    gender,
                    appointment_date: appointment_date,
                    department,
                    doctor_firstName: doctor_firstName,
                    doctor_lastName: doctor_lastName,
                    hasVisited,
                    address,
            })
            const { data } = await axios.post(
                "http://localhost:4000/api/v1/appointment/booking",
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    cnic,
                    dob,
                    gender,
                    appointment_date: appointment_date,
                    department,
                    doctor_firstName: doctor_firstName,
                    doctor_lastName: doctor_lastName,
                    hasVisited: hasVisitedBool,
                    address,
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => {
                toast.success(res.data.message);
                    setFirstName(""),
                    setLastName(""),
                    setEmail(""),
                    setPhone(""),
                    setCnic(""),
                    setCnic(""),
                    setGender(""),
                    setAppointment_date(""),
                    setDepartment(""),
                    setDoctor_firstName(""),
                    setDoctor_lastName(""),
                    setHasVisited(""),
                    setAddress("");
            })


        } catch (error) {
            toast.error(error.response.data.message);

        }

    };



    return (
        <>
            <div className="container form-component register-form">
                <h2>Appointment Form</h2>
                <p>Please Book your the Appointment</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
                    voluptas expedita itaque ex, totam ad quod error?
                </p>
                <form onSubmit={handleAppointment}>
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="CNIC"
                            value={cnic}
                            onChange={(e) => setCnic(e.target.value)}
                        />
                        <input
                            type={"date"}
                            placeholder="Date of Birth"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                        
                    </div>
                    <div>
                        <input
                            type={"date"}
                            placeholder="Appointment Date"
                            value={appointment_date}
                            onChange={(e) => setAppointment_date(e.target.value)}
                        />
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>   
                        <select
                            value={department}
                            onChange={(e) => {
                                setDepartment(e.target.value);
                                setDoctor_firstName("");
                                setDoctor_lastName("");
                            }}
                        >
                            {departmentsArray.map((depart, index) => {
                                return (
                                    <option value={depart} key={index}>
                                        {depart}
                                    </option>
                                );
                            })}
                        </select>
                       
                        <select
                            value={JSON.stringify({
                                firstName: doctor_firstName,
                                lastName: doctor_lastName,
                            })}
                            onChange={(e) => {
                                const { firstName, lastName } = JSON.parse(e.target.value);
                                setDoctor_firstName(firstName);
                                setDoctor_lastName(lastName);
                            }}
                            disabled={!department}
                        >
                            <option value="">Select Doctor</option>
                            {doctors
                                .filter((doctor) => doctor.DocDepartment === department)
                                .map((doctor, index) => (
                                    <option
                                        key={index}
                                        value={JSON.stringify({
                                            firstName: doctor.firstName,
                                            lastName: doctor.lastName,
                                        })}
                                    >
                                        {doctor.firstName} {doctor.lastName}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <textarea
                        rows="10"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                    />
                    <div
                        style={{
                            gap: "10px",
                            justifyContent: "flex-end",
                            flexDirection: "row",
                        }}
                    >
                        <p style={{ marginBottom: 0 }}>Have you visited before?</p>
                        <input
                            type="checkbox"
                            checked={hasVisited}
                            onChange={(e) => setHasVisited(e.target.checked)}
                            style={{ flex: "none", width: "25px" }}
                        />
                    </div>
                    <div style={{ justifyContent: "center", alignItems: "center" }}>
                        <button type="submit">Book</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AppointmentForm
