import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../services/users";
import { IUser } from "../types/user";
import Layout from "../components/Layout";
import CardSkeleton from "../components/CardSkeleton";

const DetailedUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>();
  const [isLoading, setIsLoading] = useState(false);

  const { id = "" } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const detailerdUser = async () => {
      const user = await getUserById(id);
      setUser(user);
      setIsLoading(false);
    };
    detailerdUser();
  }, [id]);

  if (isLoading)
    return (
      <Layout>
        <CardSkeleton />
      </Layout>
    );

  return (
    <Layout>
      <div className="w-full">
        <button
          onClick={() => navigate("/")}
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          Back to List
        </button>
        <div className="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
          <img
            className="object-cover "
            src={user?.picture?.large}
            alt={`Profile picture of ${user?.name?.first} ${user?.name?.last}`}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {user?.name?.first} {user?.name?.last}
            </h5>
            <div>
              <p className="font-normal text-gray-700 ">
                <span className="font-bold">Age:</span> {user?.dob?.age}
              </p>
              <p className="font-normal text-gray-700 ">
                <span className="font-bold">Location:</span>{" "}
                {user?.location?.city} - {user?.location?.state}
              </p>
              {user?.dob?.date && (
                <p className="font-normal text-gray-700 ">
                  <span className="font-bold">Birthday:</span>{" "}
                  {new Date(user?.dob?.date).toLocaleDateString()}
                </p>
              )}
              <p className="font-normal text-gray-700 ">
                <span className="font-bold">Email:</span>{" "}
                <a href={`mailto:${user?.email})`}>{user?.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailedUser;
