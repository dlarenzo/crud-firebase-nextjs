"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function Home() {
  // useState to hold all information
  const [users, setUsers] = useState([]);

  // Create reference to collection (db, collectionName)
  const usersCollectionRef = collection(db, "users");

  // Get list of users from database. Called when page renders
  // Make API call to get users
  useEffect(() => {
    // Create Async function to get users
    const getUSers = async () => {
      // Get data from firestore
      const data = await getDocs(usersCollectionRef);
      // Set data to users and map through data to get id
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    // Call function
    getUsers();
  }, [usersCollectionRef]);
  return (
    <div>
      {/* Map through users and display name and age */}
      {users.map((user) => {
        return (
          <div key={user.id}>
            {" "}
            <h1>Name: {user.name}</h1>;<h1>Age: {user.age}</h1>;
          </div>
        );
      })}
    </div>
  );
}
