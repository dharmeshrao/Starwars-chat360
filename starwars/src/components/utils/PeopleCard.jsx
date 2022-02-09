export const PeopleCard = ({name,birth,gender}) => {
  return (
    <div className="w-4/5 p-4 bg-white m-auto rounded-xl drop-shadow-lg flex flex-col gap-2">
      <div className="flex justify-around text-center p-4 bg-purple-100 bg-opacity-40 rounded-xl">
        <div className="w-1/3">
          <h4 className="text-purple-600 font-semibold text-lg">Name</h4>
          <p className="text-black text-2xl font-bold">{name || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 font-semibold text-lg">Birth</h4>
          <p className="text-black text-2xl font-bold">{birth || ""}</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-purple-600 font-semibold text-lg">Gender</h4>
          <p className="text-black text-2xl font-bold">{gender || ""}</p>
        </div>
      </div>
      <div className="bg-purple-100 bg-opacity-30 rounded-xl h-8 flex p-6 items-center">
        <h2 className="font-semibold text-xl mr-9 text-black">Films: </h2>
        <button className="bg-white ml-4 hover:bg-gray-100 text-purple-600 font-semibold py-1 px-4 border border-purple-600 rounded shadow">
          button
        </button>
      </div>
      <div className="bg-purple-100 bg-opacity-40 rounded-xl h-8 flex p-6 items-center">
        <h2 className="font-semibold text-xl text-black">Starships: </h2>
        <button className="bg-white ml-4 hover:bg-gray-100 text-purple-600 font-semibold py-1 px-4 border border-purple-600 rounded shadow">
          button
        </button>
      </div>
      <div className="bg-purple-100 bg-opacity-40 rounded-xl h-8 flex p-6 items-center">
        <h2 className="font-semibold text-xl mr-2 text-black">Vehicles: </h2>
        <button className="bg-white ml-4 hover:bg-gray-100 text-purple-600 font-semibold py-1 px-4 border border-purple-600 rounded shadow">
          button
        </button>
      </div>
    </div>
  );
};

// The cards should show these fields:- name, birth_year, gender, films, starships, vehicles. (The films and starships will be only links to two different pages)
