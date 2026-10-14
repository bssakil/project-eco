function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div className="page">

      <h1>My Profile</h1>

      {user && (

        <div className="profile-card">

          <h2>{user.name}</h2>

          <p>Email: {user.email}</p>

          <p>Phone: {user.phone}</p>

          <h3>
            Balance: ${user.balance}
          </h3>

        </div>

      )}

    </div>
  );
}

export default Profile;