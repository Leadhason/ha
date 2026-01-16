import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-transparent z-10 p-5 flex justify-between items-center">
      <div className="shadow-sm p-3 cursor-pointer flex rounded-full items-center px-2">
        <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
            <Phone />
        </div>
        <div className="mx-3 flex flex-col">
            <p className="text-sm font-semibold">Book a 30 mins call</p>
            <div className="flex gap-2 items-center">
                <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></div>
                <p className="text-sm font-light">Available Now</p>
            </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-bold font-sans">Tarantula</h2>
      </div>

    <div className="">
      <Button className="bg-blue-700 backdrop-blur-md items-center justify-center flex rounded-full p-5 text-white hover:bg-blue-600 border border-white/30 shadow-sm">
        <p className="text-lg font-light">Menu</p>
        <Menu />
      </Button>
    </div>
    </div>
  )
}

export default Navbar