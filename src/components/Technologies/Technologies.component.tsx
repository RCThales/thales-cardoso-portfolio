const Technologies = () => {
  return (
    
      <div className="bg-[#f3f4f5] overflow-hidden dark:bg-slate-800 transition-colors">
        <h3 className="flex justify-center w-screen m-10 text-3xl lg:text-5xl font-std dark:text-white transition-colors">
          TECH I USE THE MOST
        </h3>

        <div
          id="stack"
          className=" flex flex-wrap gap-10 justify-center items-center h-auto w-full mb-10"
        >
          <div className="flex flex-wrap gap-20 justify-center items-center max-w-[90%]">
            <img
              className="w-24 h-24 p-1"
              src="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/react.svg"
              alt="React logo"
            />
            <img
              className="w-24 h-24 p-1"
              src="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/js.svg"
              alt="Javascript logo"
            />
            <img
              className="w-24 h-24 p-1"
              src="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/next-js.png"
              alt="Next.js logo"
            />
            <img
              className="w-24 h-24 p-1"
              src="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/tailwind.svg"
              alt="Tailwind logo."
            />
            <img
              className="w-24 h-24 p-1"
              src="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/sass.svg"
              alt="SASS logo."
            />
            <img
              className="w-24 h-24 p-1"
              src="https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/ts.svg"
              alt="Typescript logo."
            />
          </div>
        </div>
      </div>
  )
}

export default Technologies