import React from "react";
import styled from "styled-components";

const C = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  vertical-align: middle;
  margin-right: 5px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: 75ms ease;
    color: #222;
  }

  &[data-status="online"]::before {
    content: "";
    background-color: #23a55a;
    box-shadow: 0 0 0 3px #222;
  }

  &[data-status="offline"]::before {
    content: "";
    background-color: #222;
    box-shadow: inset 0 0 0 2.75px #777, 0 0 0 3px #222;
  }

  &[data-status="do-not-disturb"]::before {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    content: "−";
    -webkit-text-stroke: #222 2px;
    background-color: #f23f43;
    box-shadow: 0 0 0 3px #222;
  }

  &[data-status="idle"]::before {
    content: "";
    background-color: #222;
    box-shadow: 0 0 0 3px #222, inset -3px -3px 0 1px #f0b232;
  }
`;

interface ProfileProps {
  image: string;
  status: string;
}

const Profile = (props: ProfileProps) => {
  return (
    <>
      {props.status ? (
        <>
          {props.status === "online" ? (
            <C
              style={{
                backgroundImage: `url(${props.image})`,
              }}
              data-status="online"
            ></C>
          ) : props.status === "idle" ? (
            <C
              style={{
                backgroundImage: `url(${props.image})`,
              }}
              data-status="idle"
            ></C>
          ) : props.status === "do-not-disturb" ? (
            <C
              style={{
                backgroundImage: `url(${props.image})`,
              }}
              data-status="do-not-disturb"
            ></C>
          ) : (
            <C
              style={{
                backgroundImage: `url(${props.image})`,
              }}
              data-status="offline"
            ></C>
          )}
        </>
      ) : (
        <C
          style={{
            backgroundImage: `url(${props.image})`,
          }}
          data-status="offline"
        ></C>
      )}
    </>
  );
};

export default Profile;
