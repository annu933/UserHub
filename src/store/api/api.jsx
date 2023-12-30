import axios from "axios";
import { useEffect, useState } from "react";




export const getData = async () => {
  
    try {
        const res = await axios.get("https://reqres.in/api/users");
        const data = res.data.data;
          console.log("stored data",data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createData = async (formData) => {
    try {
        const res = await axios.post("https://reqres.in/api/users", formData);
        const data = res.data;
        console.log("stored data", data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};



export const updateData = async () => {
    try {
        const res = await axios.get("https://reqres.in/api/users");
        const data = res.data.data;
        console.log("stored data", data);
        //   const Email = data.map((item,i)=>item.email)
        //   console.log("indexData",Email);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};



