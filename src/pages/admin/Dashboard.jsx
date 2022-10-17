import { IoWalletSharp } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className=''>
      <div className='h-32 flex flex-col'>
        <div className=' h-20 bg-slate-700 text-yellow-400 text-3xl'>
          <div className='h-full flex justify-between items-center px-4'>
            <h1>M/M</h1>
            <HiMenuAlt3 className='cursor-pointer' />
          </div>
        </div>
        <h2 className='text-center font-bold text-2xl text-blue-900 mt-2'>Administrador</h2>
      </div>
      <div className='border min-h-screen bg-yellow-400 '>
        <div className='grid md:grid-cols-3 md:my-10'>
          {/* elemento del dashboard */}
          <div className='flex min-w-[235px] md:h-[150px] items-center justify-between border bg-slate-100 p-3 rounded-xl mx-5 my-3 shadow-lg'>
            <div className='border-r pr-5'>
              <IoWalletSharp size={60} fill={"green"} />
            </div>
            <div>
              {" "}
              <p className='my-1'>Capital total</p>
              <h4 className='font-bold text-2xl'>$10,000.70</h4>
            </div>
          </div>
          {/* elemento del dashboard */}
          {/* elemento del dashboard */}
          <div className='flex min-w-[235px] items-center   justify-between border bg-slate-100 p-3 rounded-xl mx-5 my-3 shadow-lg'>
            <div className='border-r pr-5'>
              <IoWalletSharp size={60} fill={"green"} />
            </div>
            <div>
              {" "}
              <p className='my-1'>Inversion Actual</p>
              <h4 className='font-bold text-2xl'>$4,000.70</h4>
            </div>
          </div>
          {/* elemento del dashboard */}
          {/* elemento del dashboard */}
          <div className='flex min-w-[235px] items-center  justify-between border bg-slate-100 p-3 rounded-xl mx-5 my-3 shadow-lg'>
            <div className='border-r pr-5'>
              <IoWalletSharp size={60} fill={"green"} />
            </div>
            <div>
              {" "}
              <p className='my-1'>Retirable</p>
              <h4 className='font-bold text-2xl'>$1,060.70</h4>
            </div>
          </div>
          {/* elemento del dashboard */}
        </div>
        <div className='grid md:grid-cols-2'>
          {/* ganacias diarias */}
          <div className='shadow-lg bg-slate-100 rounded-xl text-center  mx-4 '>
            <div className='border-b '>
              <h3 className='py-2'>Ganancias diarias</h3>
            </div>
            <div className='grid grid-cols-2 place-content-center h-[200px]'>
              <div className='border-slate-300 border-r text-green-500 text-6xl flex justify-center items-center font-bold'>
                <p>1.5%</p>
              </div>
              <div className='flex-1'>
                <p>plan basico</p>

                <p className='font-bold text-lg'>$32.00 x Dia.</p>
              </div>
            </div>
          </div>
          {/* ganacias diarias */}

          <div className='shadow-lg bg-slate-100 rounded-xl text-center mt-5 md:mt-0 mx-4 '>
            <div className='border-b '>
              <h3 className='py-2'>Ganancias al Completar</h3>
            </div>
            <div className='grid grid-cols-2 place-content-center h-[200px]'>
              <div className='border-slate-300 border-r text-green-500 text-6xl flex justify-center items-center font-bold'>
                <p>45%</p>
              </div>
              <div className='flex-1'>
                <p>plan basico</p>

                <p className='font-bold text-lg'>$960.00 x Ciclo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
