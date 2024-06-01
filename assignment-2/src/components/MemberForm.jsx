import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../features/members/membersSlice";

const MemberForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      id: Date.now(),
      name,
      description,
      age: Number(age),
      image,
    };

    dispatch(addMember(newMember));

    setName("");
    setDescription("");
    setAge("");
    setImage("");
  };

  const handleClear = () => {
    setName("");
    setDescription("");
    setAge("");
    setImage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow-md rounded-lg space-y-4"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <div className="flex space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Member
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default MemberForm;
