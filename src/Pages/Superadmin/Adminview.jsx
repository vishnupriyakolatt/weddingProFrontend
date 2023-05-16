import React, { useState, useEffect } from "react";
import axios from "../../instance/axios";
import BaseTable from "../../Component/Basetable";
import { NavLink, Link, Navigate, Await } from "react-router-dom";
import Superadminbar from "../../Component/Superadminbar";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const Adminview = () => {
  const { superadmin } = useAuthContext();
  const [admin, setadmin] = useState([]);
  const [search, setsearch] = useState("");
  const [filteredAdmin, setFilteredAdmin] = useState([]);
  const [loading, setloading] = useState(true);

  const getAdmin = async () => {
    try {
      const response = await axios.get("/superadmin/viewadmin", {
        headers: {
          Authorization: `${superadmin.token}`,
        },
      });
      console.log(superadmin.token);
      const { message, data } = response.data;
      console.log(response.data);

      console.log("successful");
      setadmin(data);
      setFilteredAdmin(data);

      toast(message);

      setloading(false);
    } catch (error) {}
  };

  const handleBlock = async (id) => {
    try {
      await axios.put(`/superadmin/blockadmin/${id}`, {
        headers: {
          Authorization: `${superadmin.token}`,
        },
      });

      getAdmin();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  useEffect(() => {
    setFilteredAdmin(
      admin.filter((adm) =>
        adm.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, admin]);

  const columns = [
    {
      name: "#",
      cell: (row, index) => <div>{index + 1}</div>,
    },
    {
      name: "Image",
      selector: (row) => <img width={90} height={90} src={row.image} />,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Contact no",
      selector: (row) => row.mobile,
    },

    {
      name: "View",
      selector: (row) => (
        <>
          <NavLink to={`/superadmin/singleview/${row._id}`}>
            <button className="bg-green-900  text-white font-bold py-2 px-4 rounded ">
              <i className="fa fa-eye" />
            </button>
          </NavLink>
        </>
      ),
    },
    {
      name: "Edit",
      selector: (row) => (
        <NavLink to={`/superadmin/editadmin/${row._id}`}>
          <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded">
            <i className="fa fa-pencil" />
          </button>
        </NavLink>
      ),
    },
    {
      name: "Block",
      selector: (row) => (
        <>
      <button
  onClick={() => handleBlock(row._id)}
  className={`${
    row.isblocked ? "bg-red-700" : "bg-green-700"
  } text-white font-bold py-2 px-4 rounded-full`}
>
  {row.isblocked ? "Unblock" : "Block"}
</button>

    </>
      ),
    },
  ];

  return (
    <div>
      <>
        <div className="flex gap-24 mx-auto">
          <Superadminbar />

          <div className="d-flex w-8/12 flex-column align-items-center mx-auto">
            <div className="flex justify-end">
              <NavLink to="/superadmin/addadmin">
                <button class="bg-green-900  text-white font-bold py-2 px-4 rounded-full mt-5 mb-5">
                  ADD NEW ADMIN
                </button>
              </NavLink>
            </div>
            {loading ? (
              <div className="loader-container absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <ClipLoader color={"#808080"} size={150} />
              </div>
            ) : (
              <BaseTable
                columns={columns}
                data={filteredAdmin}
                title={"ADMIN MANAGEMENT"}
                pagination
                fixedHeader
                HighlightOnHover
                subHeader
                subHeaderComponent={
                  <input
                    type="text"
                    placeholder="Search"
                    className="shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black "
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                  />
                }
              />
            )}
          </div>
        </div>
      </>
    </div>
  );
};
export default Adminview;