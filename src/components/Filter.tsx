import { filterState } from "../store/useStore";

const Filter = () => {
  const { gender, name, ageRange, setGender, setName, setAgeRange } =
    filterState();

  return (
    <div className="mb-4 flex gap-4">
      <select
        onChange={(e) => setGender(e.target.value)}
        value={gender}
        className="p-2 border rounded"
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
      />
      <label className="flex items-center gap-2">
        <input
          type="range"
          min="0"
          max="100"
          value={ageRange[0]}
          onChange={(e) => setAgeRange([Number(e.target.value), ageRange[1]])}
        />
        {ageRange[0]}
      </label>
      <label className="flex items-center gap-2">
        <input
          type="range"
          min="0"
          max="100"
          value={ageRange[1]}
          onChange={(e) => setAgeRange([ageRange[0], Number(e.target.value)])}
        />
        {ageRange[1]}
      </label>
    </div>
  );
};

export default Filter;
