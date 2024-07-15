import SocialMedia from "./components/SocialMedia";

const Bottom = () => {
  return (
    <div className='w-full bg-stone-900'>
      <div className='w-2/3 m-auto pb-24 pt-12 flex flex-col items-start h-full'>
        <div className="flex justify-between item-center w-full h-48">
          <div className='w-2/3 text-left'>
            <h1 className="text-4xl text-orange-200 mt-8 font-bold">Miguel Gutierrez</h1>
            <p className='text-white my-2'>
              <a href="mailto:miguelgutz95@gmail.com" rel="noreferrer noopener" >
                miguelgutz95@gmail.com
              </a>
            </p>
          </div>
          <SocialMedia />
        </div>

      </div>
    </div>
  );
}
export default Bottom;