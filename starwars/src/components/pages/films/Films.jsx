export const Films = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="w-4/5 p-4 bg-white m-auto rounded-xl drop-shadow-lg flex flex-col gap-2">
        <div className="flex flex-row justify-between gap-2 bg-purple-100 bg-opacity-30 rounded-xl p-4">
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Title</h4>
            <p className="text-black text-2xl font-bold">Dharmesh</p>
          </div>
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Director</h4>
            <p className="text-black text-2xl font-bold">Dafsa</p>
          </div>
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">Producer</h4>
            <p className="text-black text-2xl font-bold">Dharmesh</p>
          </div>
          <div className="w-1/4 text-center">
            <h4 className="text-purple-600 font-semibold text-lg">
              Release Date
            </h4>
            <p className="text-black text-2xl font-bold">Dharmesh</p>
          </div>
        </div>
        <div className="bg-purple-100 bg-opacity-30 rounded-xl flex p-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          omnis totam ratione officia pariatur magnam quam maiores, sequi, ab
          id, consequuntur quibusdam harum aut suscipit reprehenderit sit
          temporibus accusamus inventore? Quasi esse corrupti expedita eligendi
          dolor eveniet in quae. Eveniet iste, consectetur sint voluptates eum
          pariatur, voluptatem deserunt nobis suscipit debitis ratione, impedit
          id repudiandae laudantium distinctio officiis omnis nesciunt!
        </div>
      </div>
    </div>
  );
};

// title, director, producer, release date, and the name of the characters in the film in a list
