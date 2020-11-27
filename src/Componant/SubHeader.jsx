import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
//import AxiosFile from "./AxiosFile";
import ShowNewsHeading from "./ShowNewsHeading";

const SubHeader = () => {
  const dispatch = useDispatch();
  const subHeaderClicking = (catagoryname) => {
    return (
      <>
        {dispatch({ type: "SET_HEADER_BUTTON_CLICKED", payload: catagoryname })}

        <h1>{catagoryname}</h1>
        <ShowNewsHeading />
      </>
    );
  };
  return (
    <>
      <Nav className=" fill sub-header justify-content-center" activeKey="/">
        <Nav.Item>
          <NavLink to="/">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/Catagory/Sports"
            onClick={() => subHeaderClicking("Sports")}
          >
            Sports
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/Catagory/Politics"
            onClick={() => subHeaderClicking("Politics")}
          >
            Politics
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/Catagory/Technology"
            onClick={() => subHeaderClicking("Technology")}
          >
            Technology
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/Catagory/World"
            onClick={() => subHeaderClicking("World")}
          >
            World
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/Catagory/Science"
            onClick={() => subHeaderClicking("Science")}
          >
            Science
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/Catagory/Entertainment"
            onClick={() => subHeaderClicking("Entertainment")}
          >
            Entertainment
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/Catagory/Weather"
            onClick={() => subHeaderClicking("Weather")}
          >
            Weather
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/Catagory/Economy"
            onClick={() => subHeaderClicking("Economy")}
          >
            Economy
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/Catagory/Romance"
            onClick={() => subHeaderClicking("Romance")}
          >
            Romance
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default SubHeader;
