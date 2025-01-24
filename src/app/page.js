"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function Home() {
  // New Name and Age
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  // useState to hold all information
  const [users, setUsers] = useState([]);

  // Create reference to collection (db, collectionName)
  const usersCollectionRef = collection(db, "users");

  // Function to get users
  const getUsers = useCallback(async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, [usersCollectionRef]);

  // Function to Create User
  const createUser = async () => {
    // Add data to firestore
    await addDoc(usersCollectionRef, { name: newName, age: newAge });
    getUsers(); // Refresh the users list after creating a new user
  };

  // Get list of users from database. Called when page renders
  // Make API call to get users
  useEffect(() => {
    // Call function
    getUsers();
  }, [getUsers]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="flex">
          <input
            placeholder="Name..."
            onChange={(event) => {
              setNewName(event.target.value);
            }}
            className=""
          />
          <input
            type="number"
            placeholder="Age..."
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
          />
        </div>
        <button onClick={createUser} className="bg-slate-500 mt-5 px-10 py-2">
          Create User
        </button>
      </div>
      {users.map((user) => (
        <div key={user.id} className="mb-10">
          <div className="flex gap-5">
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
          </div>
          <button className="bg-slate-300 mt-2 px-10 py-2">Increase Age</button>
        </div>
      ))}
    </div>
  );
}
