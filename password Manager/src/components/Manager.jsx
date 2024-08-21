import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, [])


    const showPass = () => {
        {/* It shows and hide the pasword */ }
        if (ref.current.src.includes("icons/eye_close.svg")) {
            ref.current.src = "icons/eye.svg"
            passwordRef.current.type = "password";
        }
        else {
            ref.current.src = "icons/eye_close.svg"
            passwordRef.current.type = "text";
        }
    }

    const savePassword = () => {
        if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3){
            // console.log(form);
            setpasswordArray([...passwordArray, {...form,id : uuidv4()}]);
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id : uuidv4()}]))
            setform({ site: "", username: "", password: "" })
            console.log([...passwordArray, form]); 
        }
        else{
            alert("Length is less than 3")
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handleCopy = (e) => {
        navigator.clipboard.writeText(e);  //Copy the text
        toast('Copy To Clipboard', {  //Its like a notification of copy
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log(e)
    }

    const editPassword = (id)=>{  //Editing the data
        const filtered = passwordArray.filter((ele)=>ele.id === id);
        setform(filtered[0]);

        const newfiltered = passwordArray.filter((ele)=>ele.id!=id);
        setpasswordArray(newfiltered);
        // localStorage.setItem("passwords",JSON.stringify(newfiltered));
        console.log(id);
    }

    const deletePassword = (id)=>{  //Deleting the particular data
        let c = confirm("Do you really want to delete the password");
        if(c){
            const filtered = passwordArray.filter((ele)=>ele.id != id);
            setpasswordArray(filtered);
            localStorage.setItem("passwords",JSON.stringify(filtered));
        }
        console.log(id);
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <div className=' p-2 md:p-5 mx-auto max-w-4xl'>  {/* Container for the input */}
                <h1 className='font-bold text-3xl text-center'>  {/* logo in the container */}
                    <span className='text-green-700'> &lt; </span>
                    Pass
                    <span className='text-green-700' >OP/&gt; </span>
                </h1>

                <p className='text-green-700 text-lg text-center'>Your Own Password Manager</p>

                <div className='flex flex-col p-4 items-center'>
                    <input value={form.site} placeholder='Enter Website URL' className='w-full rounded-full border-green-500 border-2 px-4 py-1' type="text" name='site' onChange={handleChange} /> {/* Name of site */}
                    <div className='flex flex-col  md:flex-row justify-between gap-4 py-4 w-full'>  {/* Taking the data from user */}
                        <input value={form.username} placeholder='Enter Username' className='md:w-full rounded-full border-green-500 border-2 px-4 py-1' type="text" name="username" onChange={handleChange} />
                        <div className='w-full md:w-1/3 relative'>
                            <input ref={passwordRef} value={form.password} placeholder='Enter Password' className='w-full rounded-full border-green-500 border-2 px-4 py-1' type="password" name="password" onChange={handleChange} />
                            <span className=' absolute right-3 top-2.5 cursor-pointer' onClick={showPass}>
                                <img ref={ref} src="icons/eye.svg" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-500 rounded-full w-fit px-4 py-1 gap-2 my-4 hover:bg-green-600 border border-green-700'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Save
                    </button>
                </div>

                <div className=''>  {/* Table of Passwords */}
                    <h2 className='font-bold text-2xl py-2'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No password to show...</div>}
                    {passwordArray.length != 0 &&
                        <div className=''>
                            <table className="table-auto w-full">
                                <thead className='bg-green-700 text-white'>
                                    <tr>
                                        <th className='py-2'>Site</th>
                                        <th className='py-2'>Username</th>
                                        <th className='py-2'>Password</th>
                                        <th className='py-2'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-green-100 max-h-[10vh] border-2 border-black overflow-scroll'>
                                    {passwordArray.map((item, index) => {
                                        return <tr key={index}>
                                            <td className='text-center border border-white py-2'>
                                                <div className='flex items-center justify-center'> <a href={item.site} target='_blank'>{item.site}</a>
                                                    <div className='size-8 cursor-pointer ml-5' onClick={() => { handleCopy(item.site) }}>
                                                        <lord-icon
                                                            style={{ "width": "30px" }}
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center border border-white py-2'>
                                                <div className='flex items-center justify-center'>{item.username}
                                                    <div className='size-8 cursor-pointer ml-5' onClick={() => { handleCopy(item.username) }}>
                                                        <lord-icon
                                                            style={{ "width": "30px" }}
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center border border-white py-2'>
                                                <div className='flex items-center justify-center'>{item.password}
                                                    <div className='size-8 cursor-pointer ml-5' onClick={() => { handleCopy(item.password) }}>
                                                        <lord-icon
                                                            style={{ "width": "30px" }}
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center border border-white py-2'>
                                                <div className=''>
                                                    <span className='mr-5 cursor-pointer' onClick={()=>{editPassword(item.id)}}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/ogkflacg.json"
                                                            trigger="hover"
                                                        >
                                                        </lord-icon>
                                                    </span>
                                                    <span className='cursor-pointer' onClick={()=>{deletePassword(item.id)}}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover"
                                                        >
                                                        </lord-icon>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager