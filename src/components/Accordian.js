import React from "react";
import { Toggle } from "./Toggle";
import { Title, Button } from "./styled";

export const Accordian = () => {

  const {isToggle, toggleStatus} = Toggle();


  return (
    <div>
      <AccordianButton isToggle={isToggle} toggleStatus={toggleStatus}/>
      {isToggle && <AccordianContent />}
    </div>
  );
};



export const AccordianButton = ({isToggle, toggleStatus}) =>  {
    return(
        <Button onClick={toggleStatus}>Header {isToggle ? "-" : "+"} </Button>
    ) 
}


export const AccordianContent = () => {
    return (
      <div>
        <Title>Content toggled</Title>
        <Title>In the following example, we have a bookstore where we want to show the user a list of books whereas each book has a title and a price tag. Depending on where the user comes from, we want toggled</Title>
      </div>
    );
}