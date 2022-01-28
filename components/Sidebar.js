import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
      <div className="container space-y-4">
        <div>
          <button className='flex items-center space-x-2'>
            <HomeIcon className='h-5 w-5'/>
            <p>Home</p>
          </button>
        </div>
        <div>
          <button className='flex items-center space-x-2'>
            <SearchIcon className='h-5 w-5'/>
            <p>Search</p>
          </button>
        </div>
        <div>
          <button className='flex items-center space-x-2'>
            <LibraryIcon className='h-5 w-5'/>
            <p>Your Library</p>
          </button>
        </div>
        <hr className='border-t-[0.1px] border-gray-900'/>
      </div>
      <div className="container space-y-4">
        <div>
          <button className='flex items-center space-x-2'>
            <HeartIcon className='h-5 w-5'/>
            <p>Favorite</p>
          </button>
        </div>
        <div>
          <button className='flex items-center space-x-2'>
            <PlusCircleIcon className='h-5 w-5'/>
            <p>Playlists</p>
          </button>
        </div>
        <div>
          <button className='flex items-center space-x-2'>
            <RssIcon className='h-5 w-5'/>
            <p>Playlists</p>
          </button>
        </div>
        <hr className='border-t-[0.1px] border-gray-900'/>
      </div>
    </div>
  )
}

export default Sidebar
