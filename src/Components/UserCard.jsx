import React from "react";

const UserCard = ({ user }) => {

    const {firstName, lastName, photoUrl, age, gender, about} = user;  
    if (!user) return;

  return (
    <div className="">
      <div className="flex items-center justify-center m-5">
        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <img src={photoUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {firstName + " " + lastName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{about}</p>
            <div className="card-actions justify-center">
              <div className="badge badge-outline p-6 bg-red-500">Reject</div>
              <div className="badge badge-outline p-6 bg-green-400">
                Interested
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
