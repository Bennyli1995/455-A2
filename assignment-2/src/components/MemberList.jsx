import { useSelector, useDispatch } from "react-redux";
import { selectMember, deleteMember } from "../features/members/membersSlice";

const MemberList = () => {
  const members = useSelector((state) => state.members.members);
  const selectedMember = useSelector((state) => state.members.selectedMember);
  const dispatch = useDispatch();

  const handleMemberClick = (memberId) => {
    dispatch(selectMember(memberId));
  };

  return (
    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {members.map((member) => (
        <div
          key={member.id}
          className={`bg-white shadow-md rounded-lg p-4 ${
            selectedMember && selectedMember.id === member.id
              ? "border-4 border-blue-500"
              : ""
          }`}
        >
          <h3
            className="text-xl font-semibold cursor-pointer"
            onClick={() => handleMemberClick(member.id)}
          >
            {member.name}
          </h3>
          <h3>{member.description}</h3>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-48 object-cover rounded mt-2"
          />
          <button
            onClick={() => dispatch(deleteMember(member.id))}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
