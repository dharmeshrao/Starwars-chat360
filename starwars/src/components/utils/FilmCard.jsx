export const FilmCard = ({name,birth,gender,height,mass,hair_color}) => {
  return (
    <div className="sm:w-4/5 w-full p-4 bg-white m-auto rounded-xl drop-shadow-lg flex flex-col gap-2">
      <div className="flex justify-around text-center p-4 bg-purple-100 bg-opacity-40 rounded-xl">
        <div className="w-1/3">
          <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
            Name
          </h4>
          <p className="text-black sm:text-2xl sm:font-bold">{name || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
            Birth
          </h4>
          <p className="text-black sm:text-2xl sm:font-bold">{birth || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
            Gender
          </h4>
          <p className="text-black sm:text-2xl sm:font-bold">{gender || ""}</p>
        </div>
      </div>
      <div className="flex justify-around text-center p-4 bg-purple-100 bg-opacity-40 rounded-xl">
        <div className="w-1/3">
          <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
            Height
          </h4>
          <p className="text-black sm:text-2xl font-bold">{height || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
            Mass
          </h4>
          <p className="text-black sm:text-2xl font-bold">{mass || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 sm:font-semibold text-sm sm:text-lg">
            Hair Color
          </h4>
          <p className="text-black sm:sm:text-2xl font-bold">
            {hair_color || ""}
          </p>
        </div>
      </div>
    </div>
  );
};
