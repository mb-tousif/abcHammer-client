import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:4000/user', {
    method: 'GET',
    headers:{
      authorization: `secretToken ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
      return <Loading/>
  }
    return (
      <div>
        <h1 className="text-2xl text-secondary m-4">
          Super Admin will Manage Admin and Users!
        </h1>
        <div class="overflow-x-auto">
          <table class="table w-full max-w-xs text-center mx-auto my-auto">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Email</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            {users.map((user,index) => (
                <UserRow key={user._id} user={user} index={index} refetch={refetch} />
              ))}
          </table>
        </div>
      </div>
    );
};

export default MakeAdmin;