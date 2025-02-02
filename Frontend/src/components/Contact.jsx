import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
        <Navbar/>
    
        <section class="py-16 ">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-[#905a21f3]">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-white dark:text-black font sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-black">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300
               text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
                dark:bg-[#f0c08ef3] dark:border-gray-600 dark:placeholder-black
                 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-white dark:text-black">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900
               bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
               dark:bg-[#f0c08ef3] dark:border-gray-600 dark:placeholder-black
                 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                 placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-black">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900
               bg-white rounded-lg shadow-sm border border-gray-300 
               focus:ring-primary-500 focus:border-primary-500 dark:bg-[#f0c08ef3] dark:border-gray-600 dark:placeholder-black   dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center 
         bg-black text-white rounded-md hover:bg-white hover:text-black duration-300 dark:bg-[#bb7c39f3] dark:border-gray-600 dark:hover:bg-white ">Send message</button>
      </form>
  </div>
</section>
        


        <Footer/>
    
    </div>
  )
}

export default Contact;
