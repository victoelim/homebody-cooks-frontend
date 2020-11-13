import React, {useState, useEffect} from 'react';
import '../UserProfile/UserProfile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {toast} from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import {Link, Redirect} from 'react-router-dom';

const UserProfile = () => {
    const [userData, updateUserData] = useState([])
    const [profileImg, setProfileImg] = useState([])
    const [email, updateEmail] = useState('')
    const [password, updatePassword] = useState('')
    const [user_name, setName] = useState('')
    const [old_password, setOld_Password] = useState('')
    const [imageFile, setImageFile] = useState()
    const [previewImage, setPreviewImage] = useState(null)
    const [message, setMessage] = useState('')
    useEffect (() => {
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/users/me`, {
            headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then (function(response){
            updateUserData(response.data);
            console.log(response.data);
            console.log(Object.keys(response.data).length)
        })
    },[])
    useEffect (()=> {
        axios.get(`https://homebody-cooks.herokuapp.com/api/v1/users/images/me`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
        }
        })
        .then (function(response){
            setProfileImg(response.data);
            console.log(response.data);
        })
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        if (old_password !== ''){
            axios.put (`https://homebody-cooks.herokuapp.com/api/v1/users/me/update`, {
                email,
                password,
                old_password,
                user_name
                },{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })
            .then (response => {
                console.log(response.data)
                toast.success("Changes has been made!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                window.location.reload()
            })
        }
    }
    const handleSubmitImage = (e) => {
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
        setImageFile(e.target.files[0])
    }
    const handleUpload = (e) => {
        e.preventDefault()
        console.log(e)
        let formData = new FormData();
        formData.append("profile_image", imageFile)
        axios.post(`https://homebody-cooks.herokuapp.com/api/v1/users/images`, formData, {
            headers: { Authorization: "Bearer " + localStorage.getItem('token') }
            })
            .then(function(response){
                // if (response.data.success) {
                    console.log(response.data)
                    setMessage("Image Uploaded Successfully!")
                    toast.success("Succesfully uploaded", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        window.location.reload()
                // }
            })
            .catch(error => {
                console.log(error.response);
            });
            setPreviewImage(null)
            setImageFile(null)
        }

    const clearPreview = () => {
        setPreviewImage(null)
        setImageFile(null)
    }
    
    return (
        <>
            {Object.keys(userData).length ?
            <>
                <Container>
                    <Row>
                        <Col sm = {6} className = "profileImg d-flex justify-content-end my-5 align-items-center">
                            <img src={profileImg.profile_image_path} alt = "profile image"/>
                        </Col>
                        <Col sm = {6} className = "profileName d-flex flex-column justify-content-center align-items-start my-5">
                            <h1 className = "mb-3">{userData.name}</h1>
                            <h5 className = "mb-3">Plan Selected: {userData.subscription_name}</h5>
                            <Link to = "/me/order_history"><button className="w-100 rounded-pill">Order History</button></Link>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container className = "formSection">
                    <h1 className = "my-5">Update Profile</h1>
                    <form onSubmit = {(e) => handleSubmit(e)}>
                    <Row className = "formLayout">
                        <Col xs = {5}>
                            <label for="user_name">Name :</label>
                        </Col>
                        <Col>
                            <input className= "rounded-pill w-100 input bg-light" type="text" id="user_name" onChange = {(e) => setName(e.target.value)}  defaultValue = {userData.name} ></input>
                        </Col>
                    </Row>
                    <br></br>
                    <Row className = "formLayout">
                        <Col xs ={5}>
                            <label for="email">Email :</label>
                        </Col>
                        <Col>
                            <input className= "rounded-pill w-100 input bg-light" type='text' id='email' onChange = {(e) => updateEmail(e.target.value)} defaultValue = {userData.email}/>
                        </Col>
                    </Row>
                    <br></br>
                    <Row className = "formLayout">
                        <Col xs ={5}>
                            <label for="password">Password :</label>
                        </Col>
                        <Col>
                            <input className= "rounded-pill w-100 input bg-light" type='password' id='password' onChange = {(e) => updatePassword(e.target.value)} value = {password}/>
                        </Col>
                    </Row>
                    <br></br>
                    <Row className = "formLayout">
                        <Col xs ={5}>
                            <label for="confirmPassword">Current Password :</label>
                        </Col>
                        <Col>
                            <input className= "rounded-pill w-100 input bg-light" type='password' id='oldPassword' onChange = {(e) => setOld_Password(e.target.value)} value = {old_password}/>
                        </Col>
                    </Row>
                    <br></br>

                    <div className="button-div text-center mt-4">
                        <button type="submit" className="w-25 rounded-pill">Update</button>
                    </div>
                    </form>
                </Container>
                <Container className = "mt-5">
                    <Row >
                        <Col sm = {6} className = "d-flex justify-content-center align-items-center">
                        <form onSubmit = {handleUpload}>
                            <input id = "uploadimg" className = "UploadImageInput" type="file" onChange = {handleSubmitImage}/>
                            <label for="uploadimg">Choose a file</label>
                            {imageFile ? <button type = "submit" className="button-upload ml-5">Upload</button> :<button className="button-upload-disabled ml-5" disabled>Upload</button>}
                        </form>
                        </Col>
                        <Col sm ={6} className = "imagePreview mb-5">
                            {previewImage ? (
                            <div>
                            <img src={previewImage} width="40%" />
                            {previewImage ? <button onClick = {clearPreview} className="button-upload ml-5">Clear</button> :''}
                            </div>
                            ) : (
                            <h3  className="text-center">
                            {message ? message : "Live Preview"}
                            </h3>
                            )}
                        </Col>
                    </Row>
                </Container> 
            </>
                :

                <div className="d-flex justify-content-center loading-head">
                <Spinner animation="border" role="status" className="loading-div">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                </div>
            
        }
        </>
    )
}


export default UserProfile;