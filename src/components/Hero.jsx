export const Hero = () => {
  return (
    <>
    <section>
      <div className="2xl:container mx-auto bg-slate-400">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="py-5 flex flex-col justify-center items-center">
            <img src="https://ik.imagekit.io/dhana94/rose%20powder_5C_4XGz9k?updatedAt=1743182340825" className="h-80"/>
          </div>

          <div className="py-5 flex flex-col items-center justify-center text-white p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolores
            veniam, rem labore reprehenderit architecto quam quaerat omnis
            provident quo dolorem! Saepe totam obcaecati ipsa, ducimus experferendis perspiciatis omnis.

            <button className="bg-slate-800 text-white p-2 mt-4 rounded-md hover:bg-slate-700 transition duration-300 ease-in-out">
              Shop Now  </button>
          </div>
        </div>
      </div>
      </section>
    </>

  );
};
