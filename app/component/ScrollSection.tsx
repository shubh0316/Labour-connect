import React from 'react'

const scrollsection = () => {
  return (
    <div className='max-w-full container text-black my-40'>
      <div className='container gap-10 flex-col w-2/3'>
        <p className='text-orange-500 text-2xl font-bold'>How it Works</p>
        <p className='text-6xl font-semibold'>
         Get Hired In 3 Simple Steps
        </p>
        <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="flex items-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">Create your profile</h1>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.</p>
      </div>
    </div>
    <div className="flex items-center">
      <img src="your-image-url.jpg" alt="Your Image" className="w-full">
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default scrollsection
