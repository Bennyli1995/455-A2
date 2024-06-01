import { useSelector, useDispatch } from "react-redux";
import { clearSelection } from "../features/members/membersSlice";

const MemberDetail = () => {
  const selectedMember = useSelector((state) => state.members.selectedMember);
  const dispatch = useDispatch();

  if (!selectedMember) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-2">{selectedMember.name}</h2>
        <p className="mb-2">{selectedMember.description}</p>
        <p className="mb-4">Age: {selectedMember.age}</p>
        <button
          onClick={() => dispatch(clearSelection())}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MemberDetail;
