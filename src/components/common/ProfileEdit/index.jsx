import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { editProfile } from "../../../api/FirestoreAPI";
import "./index.scss";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CountrySelect from "./Countryselect";
export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <div className="profile-card">
      <div className="edit-btn">
        <AiOutlineClose className="close-icon" onClick={onEdit} size={25} />
      </div>

      <div className="profile-edit-inputs">
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '98%' },
        }}
        noValidate
        autoComplete="off"
        >
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Name" 
         variant="filled"
         name="name"
         value={editInputs.name} />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Headline" 
         variant="filled"
         value={editInputs.headline}
         name="headline" /> 
         <CountrySelect
         onChange={getInput}
         name="country"
         value={editInputs.country}
         variant="filled"
         />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="City" 
         variant="filled"
         name="city"
         value={editInputs.city} />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Education Board" 
         variant="filled"
         name="EducationBoard"
         value={editInputs.EducationBoard} />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="School" 
         variant="filled"
         name="school"
         value={editInputs.school} />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Website" 
         variant="filled"
         name="website"
         value={editInputs.website} />
         <TextField
          id="filled-multiline-static"
          label="About"
          multiline
          rows={5}
          defaultValue="About Me"
          variant="filled"
          onChange={getInput}
          name="aboutMe"
          value={editInputs.aboutMe}
        />
        <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Skills" 
         variant="filled"
         name="skills"
         value={editInputs.skills} />
        </Box>
        <Box>
        <div className="save-container">
        <Button
        variant="contained"
        className="save-btn" 
        onClick={updateProfileData}
        >Submit</Button>
        </div>
        </Box>
      </div>
    </div>
  );
}