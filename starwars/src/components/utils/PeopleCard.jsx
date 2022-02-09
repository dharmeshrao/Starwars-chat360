export const PeopleCard = ()=>{
    return <div className="w-4/5 p-4 bg-slate-400 m-auto rounded-xl">
        <div className="flex justify-around text-center p-4 bg-red-200">
            <div>
                <h4 className="text-purple-600 font-semibold text-lg">Name</h4>
                <p className="text-black text-2xl font-bold">Dharmesh</p>
            </div>
            <div>
                <h4 className="text-purple-600 font-semibold text-lg">Birth</h4>
                <p className="text-black text-2xl font-bold">Dharmesh</p>
            </div>
            <div>
                <h4 className="text-purple-600 font-semibold text-lg">Gender</h4>
                <p className="text-black text-2xl font-bold">Dharmesh</p>
            </div>
        </div>
        <div>
            
        </div>
    </div>
}


// The cards should show these fields:- name, birth_year, gender, films, starships, vehicles. (The films and starships will be only links to two different pages)