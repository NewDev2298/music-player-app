import React from 'react';

const User = ({ _id, username }) => {
  return (
    <div>
      
    </div>
  );
};

const UserList = ({ users, title }) => {
  if (!users.length) return <h3>No Users</h3>;

  const renderUsers = () => {
    if (!users) return null;
    return users.map(user => <User key={user._id} {...user} />);
  }

  return (
    <>

    </>
  );
};

export default UserList;
