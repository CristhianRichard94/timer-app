import { publish } from "@/app/utils/events";
import { useRef } from "react";

function TimeInput() {
  const hsElement = useRef<HTMLInputElement>(null);
  const minsElement = useRef<HTMLInputElement>(null);
  const secsElement = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    publish("startClick", {
      time: {
        hs: hsElement.current?.value,
        mins: minsElement.current?.value,
        secs: secsElement.current?.value,
      },
    });
  };

  return (
    <div className="flex flex-col justify-between w-100">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Hs
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hs"
            type="number"
            placeholder="Hours"
            ref={hsElement}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mins
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mins"
            type="number"
            placeholder="Minutes"
            ref={minsElement}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Secs
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="secs"
            type="number"
            placeholder="seconds"
            ref={secsElement}
          />
        </label>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Start!
      </button>
    </div>
  );
}

export default TimeInput;
