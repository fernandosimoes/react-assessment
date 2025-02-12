import { useEffect, useMemo, useState } from "react";

import { IUser } from "../types/user";
import { getUsers } from "../services/users";

import { filterState } from "../store/useStore";
import Badge from "../components/Badge";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import CardSkeleton from "../components/CardSkeleton";
import Filter from "../components/Filter";

const Home = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { gender, name, ageRange } = filterState();

  useEffect(() => {
    setIsLoading(true);
    const listUsers = async () => {
      const results = await getUsers();
      setData(results);
      setIsLoading(false);
    };
    listUsers();
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        (gender ? item.gender === gender : true) &&
        (name
          ? `${item.name.first} ${item.name.last}`
              .toLowerCase()
              .includes(name.toLowerCase())
          : true) &&
        item.dob.age >= ageRange[0] &&
        item.dob.age <= ageRange[1]
    );
  }, [data, gender, name, ageRange]);

  if (isLoading)
    return (
      <Layout>
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {new Array(10).fill(0).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </Layout>
    );

  return (
    <Layout>
      <Filter />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.map((item, index) => (
          <Link
            to={`/users/${item.login.uuid}`}
            key={index}
            className="border p-4 rounded shadow-md flex items-center gap-4 cursor-pointer"
          >
            <img
              className="rounded-full"
              src={item.picture.large}
              alt={`Profile picture of ${item.name.first} ${item.name.last}`}
            />
            <div className="overflow-hiden">
              <h2 className="text-xl font-bold">
                {item.name.first} {item.name.last}
              </h2>
              <span className="truncate w-[100px]">{item.email}</span>
              <div>
                <Badge variant="rounded" size="xs">
                  {item.gender}
                </Badge>
                <Badge variant="rounded" size="xs">
                  {item.dob.age}
                </Badge>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
