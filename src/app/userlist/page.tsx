import React from 'react';
interface userProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}
async function getData() {
  const res = await fetch('http:/localhost:3000/api/customers', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function Page() {
  const userlist = await getData();

  return (
    <>
      <h1>List of registered customers </h1>
      <div className="resTable">
        <table id="customers">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>

          {userlist.map((user: userProps) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.first_name}
                {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Page;
