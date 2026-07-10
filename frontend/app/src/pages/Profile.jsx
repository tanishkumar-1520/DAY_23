import { useEffect, useState } from "react";
import api from "../api";

function Profile() {

    const [user, setUser] = useState({});

    useEffect(() => {

        const getProfile = async () => {

            try {

                const res = await api.get("/profile");

                setUser(res.data);

            } catch (err) {
                console.log(err);
            }

        };

        getProfile();

    }, []);

    return (
        <div>

            <h1>Profile Page</h1>

            <h2>Name : {user.name}</h2>

            <h3>Email : {user.email}</h3>

            <h3>Age : {user.age}</h3>

        </div>
    );
}

export default Profile;