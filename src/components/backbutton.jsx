import Link from "next/link";
const BackButton = () => (
  <div className="fixed top-0 right-0">
    <Link href="/">
      <button className="text-2xl m-4 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md hover:bg-gray-100">
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
    </Link>
  </div>
);
export default BackButton

