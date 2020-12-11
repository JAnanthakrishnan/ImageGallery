import { useEffect, useState } from "react";
import Timer from "./Timer";

function ImageSearch({ searchText }) {
  const [text, setText] = useState("");
  const [checked, toggleChecked] = useState(true);
  const [page, setPage] = useState(1);
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text, checked, page);
  };
  // const onChange = (e) => {
  //   toggleChecked(!checked);
  //   searchText(text, !checked);
  // };
  useEffect(() => {
    searchText(text, checked, page);
    //eslint-disable-next-line
  }, [page, checked, text]);
  return (
    <div className="mx-auto max-w-sm rounded overflow-hidden my-10">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center  border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
            onChange={(e) => setText(e.target.value)}
          />
          {/* <button
            className=" flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Submit
          </button> */}
          <Timer
            updatePage={(page) => {
              setPage(page);
            }}
          />
        </div>
        <div className="md:flex md:items-center mb-6 mx-auto ">
          <label className=" md:w-full flex text-gray-500 font-bold items-center justify-end">
            <input
              className=" mr-3 leading-tight rounded"
              type="checkbox"
              checked={checked}
              onChange={(e) => toggleChecked(!checked)}
            />
            <span className="text-sm">SafeSearch!</span>
          </label>
        </div>
      </form>
    </div>
  );
}
export default ImageSearch;
