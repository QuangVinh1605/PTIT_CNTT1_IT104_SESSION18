import React, { useMemo } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

const UserList: React.FC = () => {
  const users: User[] = [
    { id: 1, name: "An", age: 16 },
    { id: 2, name: "Bình", age: 20 },
    { id: 3, name: "Châu", age: 22 },
    { id: 4, name: "Dung", age: 17 },
    { id: 5, name: "Hải", age: 25 },
  ];

  const adultUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul>
        {adultUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
