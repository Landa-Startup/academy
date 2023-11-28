import Link from 'next/link';

const CourseItem = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <Link
      href={'/academy/' + title}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      className="courses-overlay group relative flex h-[350px] w-[175px] shrink-0 flex-col items-center justify-center bg-gray-300 p-4 m-8 duration-500 md:h-[486px] md:hover:h-[486px] md:hover:w-[384px]"
    >
      <div className="absolute left-[65px] top-[350px] hidden origin-top-left -rotate-90 text-4xl leading-[50px] tracking-widest text-white transition-colors duration-500 md:block md:w-[396px] md:group-hover:static md:group-hover:max-w-fit md:group-hover:rotate-0">
        {title}
      </div>
      <div className="z-10 hidden text-xl leading-[50px] tracking-wide text-yellow-50 md:group-hover:block">
        {}
      </div>
      <div className="left-[45px] top-[80px] z-10 origin-top-left text-lg leading-[50px] tracking-widest text-white md:hidden md:w-[396px] md:group-hover:animate-spin md:group-hover:transition-all md:group-hover:duration-500">
        {title}
      </div>
      {/* <button className="w-44 h-14 px-16 py-3.5 mt-11 bg-yellow-400 justify-center items-center gap-2.5 hidden md:group-hover:transition-opacity md:group-hover:duration-500 md:group-hover:inline-flex z-10">
    <div className="text-center text-white text-2xl font-normal">
      Check Now
    </div>
  </button> */}
    </Link>
  );
};

export default CourseItem;
