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
`;

interface ProfileProps {
  image: string,
  status: string,
}

const Profile = (props: ProfileProps) => {
  return <C>{props.image}</C>;
};

export default Profile;
