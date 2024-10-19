import { useContext, useState } from "react";
import { StateContext } from "../../context/globalContext";

const Right_Side = () => {
  const [count, setCount] = useState(1);

  const { setName } = useContext(StateContext);
  // Increment function
  const handleIncrement = () => {
    setCount(count + 1);
  };
  // decrement function
  const handleDecrement = () => {
    setCount(count - 1);
  };
  console.log(count);
  return (
    <div className="w-3/4 md:overflow-y-scroll mx-auto px-3">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* input field 1 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Name
            </span>
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="input bg-black input-bordered"
            required
          />
        </div>
        {/* input field 2 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Templete
            </span>
          </label>
          <select className="select bg-black select-bordered w-full max-w-xs">
            <option>Normal</option>
            <option>Effect</option>
            <option>Fusion</option>
            <option>Ritual</option>
            <option>Sychro</option>
            <option>Xyz</option>
            <option>Link</option>
            <option>Token</option>
            <option>Spell</option>
            <option>Trap</option>
            <option>Skill</option>
            <option>Dark Synchro</option>
            <option>Unity</option>
            <option>Rainbow</option>
          </select>
        </div>
        {/* input field 3 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text uppercase font-semibold text-white">
              Rarity
            </span>
          </label>
          <select className="select bg-black select-bordered w-full max-w-xs">
            <option>Common</option>
            <option>Rare</option>
            <option>Ultra rare</option>
            <option>Secret rare</option>
            <option>Mosaik rare</option>
            <option>Shatterfoil rare</option>
            <option>Ranibow rare</option>
          </select>
        </div>
        {/* input field 4 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text uppercase font-semibold text-white">
              Symbol
            </span>
          </label>
          <select className="select bg-black select-bordered w-full max-w-xs">
            <option>None</option>
            <option>Dark</option>
            <option>Devine</option>
            <option>Earth</option>
            <option>Fair</option>
            <option>Light</option>
            <option>Water</option>
            <option>Wind</option>
            <option>Spell</option>
            <option>Trap</option>
            <option>Rainbow</option>
            <option>Void</option>
          </select>
        </div>
        {/* input field 5 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Type
            </span>
          </label>
          <input
            type="text"
            className="input bg-black input-bordered"
            required
          />
        </div>
        {/* input field 6 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text uppercase font-semibold text-white">
              Level
            </span>
          </label>
          <input
            type="text"
            value={count}
            className="input px-32 bg-black input-bordered"
            defaultValue={0}
            required
          />
          <div className=" relative -top-12">
            <button onClick={handleIncrement} className="bg-green-800 w-6 px-1">
              +
            </button>{" "}
            <br />
            <button onClick={handleDecrement} className="bg-red-600 w-6 px-1">
              -
            </button>
          </div>
        </div>
        {/* input field 7 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text uppercase font-semibold text-white">
              Style Varient
            </span>
          </label>
          <select className="select bg-black select-bordered w-full max-w-xs">
            <option>Normal</option>
            <option>Enime</option>
            <option>Rush</option>
          </select>
        </div>
        {/* input field 8 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Attack
            </span>
          </label>
          <input
            type="text"
            className="input bg-black input-bordered"
            required
          />
        </div>
        {/* input field 9 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Defence
            </span>
          </label>
          <input
            type="text"
            className="input bg-black input-bordered"
            required
          />
        </div>
        {/* input field 10 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Set Id
            </span>
          </label>
          <input
            type="text"
            className="input bg-black input-bordered"
            required
          />
        </div>
        {/* input field 11 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              Serial Number
            </span>
          </label>
          <div className="flex">
            <input
              type="text"
              className="input w-3/5 bg-black input-bordered"
              required
            />
            <button className="w-2/5 bg-[#1d5d58] text-white rounded-r-lg">
              RANDOMIZE
            </button>
          </div>
        </div>
        {/* input field 12 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold uppercase text-white">
              CopyRight
            </span>
          </label>
          <input
            type="text"
            className="input bg-black input-bordered"
            required
          />
        </div>
      </div>
      {/* grid style end */}

      {/* image input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold uppercase text-white">
            Image
          </span>
        </label>
        <input type="text" className="input bg-black input-bordered" required />
      </div>

      {/* choose file */}
      <div className="mt-4">
        <input
          type="file"
          className="file-input file-input-ghost w-full bg-black"
        />
      </div>

      {/* Effect field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold uppercase text-white">
            Effect
          </span>
        </label>
        <textarea name="" className="bg-black" id=""></textarea>
      </div>

      <div className="md:w-2/5 flex gap-3 py-2">
        <button className="bg-[#515664] uppercase w-full p-1">Credit</button>
        <button className="bg-[#515664] uppercase w-full p-1">
          Developer Feature
        </button>
      </div>
    </div>
  );
};

export default Right_Side;
