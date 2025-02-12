import { filterState } from "../store/useStore";

const Filter = () => {
  const { gender, name, ageRange, setGender, setName, setAgeRange } =
    filterState();

  return (
    <div className="mb-4 grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="flex">
        <label htmlFor="gender">Filter by Gender</label>
        <select
          id="gender"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          className="p-2 border rounded w-full"
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
      />
      <div className="flex gap-4 flex-col md:flex-row col-span-1 md:col-span-2">
        <label htmlFor="age-min">Minimum age: {ageRange[0]}</label>
        <input
          id="age-min"
          type="range"
          min="0"
          max="100"
          value={ageRange[0]}
          onChange={(e) => setAgeRange([Number(e.target.value), ageRange[1]])}
        />
        <label htmlFor="age-max">Maximum age: {ageRange[1]}</label>
        <input
          id="age-max"
          type="range"
          min="0"
          max="100"
          value={ageRange[1]}
          onChange={(e) => setAgeRange([ageRange[0], Number(e.target.value)])}
        />
        {ageRange[1]}
      </div>
    </div>
  );
};

export default Filter;
