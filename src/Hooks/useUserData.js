import { useEffect, useState } from 'react';

const useUserData = () => {
    const [users, setUsers] = useState([]);
    // const [userLoading, setUserLoading] = useState([true]);
    useEffect(() => {
      const url = "http://localhost:4000/users";
        fetch(url)
        .then((res) => res.json())
        .then((data) =>setUsers(data));
    }, []);
    return [users];
    // return [users, userLoading];
};

export default useUserData;