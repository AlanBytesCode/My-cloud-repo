
export default function NoPage() {
   return (
      <div className='bg-gray-400 
                     min-h-[100vh] 
                     flex 
                     justify-center
      '>
         <h1 className='text-[clamp(1rem,7vw,20rem)] pt-[20vh]'>
            <span className='text-red-700'>Error</span>: 
            <span className='text-red-700'> 404</span> 
            <span className='text-blue-700'> Page Not Found</span>
         </h1>
      </div>
   )
}