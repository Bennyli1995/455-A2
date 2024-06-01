import MemberForm from "./components/MemberForm";
import MemberList from "./components/MemberList";
import MemberDetail from "./components/MemberDetail";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <MemberForm />
        <MemberList />
        <MemberDetail />
      </div>
    </div>
  );
};

export default App;
