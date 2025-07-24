import Footer from "./foter";
import Section from "./othersection";
import Nav from "./sticky";
const Connect = () => {
  return (
    <>
    <div className="hidden md:flex md:pt-10 lg:pt-0"><Section/></div>
    <h1 className="text-center text-xl md:text-3xl text-yellow-50 font-bold md:w-11/12 w-12/12 lg:hidden  animate-slideUp p-10">Let’s Build Something Awesome – Get in Touch!</h1>
    <section className="h-screen lg:h-auto grid grid-cols-1 lg:grid-cols-2 bg-black lg:py-12  md:px-6 px-5 lg:px-10 ">
      <div className="lg:ml-7 ml-2 mt-7  lg:pt-14 lg:order-1 order-2">
        <h1 className="text-center text-4xl text-yellow-50 font-bold w-12/12 hidden animate-slideUp lg:grid">Let’s Build Something Awesome – Get in Touch!</h1>
       <div className=" lg:grid-cols-1 w-12/12 lg:ml-7 ml-4 mt-9 lg:grid hidden  grid-cols-2">
       <a href="https://github.com/AnjaliShandilya" target="_blank" className=" text-yellow-50 hover:underline "><i class="fa-brands fa-github   text-yellow-50 lg:p-4 p-2 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 font-medium lg:text-2xl md:text-base lg:mr-4 mr-2"></i>AnjaliShandilya</a>
        <a href="https://www.linkedin.com/in/anjalishandilya333/" target="_blank" className=" text-yellow-50 hover:underline lg:my-4 my-2 " ><i className="fa-brands fa-linkedin   text-yellow-50 lg:p-4 p-2 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 font-medium lg:text-2xl md:text-base lg:mr-4 mr-2"></i>anjalishandilya333</a>
        <a href="mailto:anjalishandilya333@gmail.com" className=" text-yellow-50 hover:underline "><i className="fa-solid fa-envelope  text-yellow-50 lg:p-4 p-2 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 lg:font-medium lg:text-2xl md:text-base lg:mr-4 mr-2"></i>anjalishandilya333@gmail.com</a></div>

     <div className="flex text-white w-9/12 m-auto justify-evenly mt-0 lg:hidden">
         <a href="https://github.com/AnjaliShandilya" target="_blank"><i class="fa-brands fa-github   text-yellow-50 lg:p-4 p-2 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 text-xl md:text-4xl mr-2"></i></a>
      <a href="https://www.linkedin.com/in/anjalishandilya333/" target="_blank" ><i className="fa-brands fa-linkedin   text-yellow-50 lg:p-4 p-2 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500  mr-2 text-xl md:text-4xl"></i></a>
      <a href="mailto:anjalishandilya333@gmail.com"><i className="fa-solid fa-envelope  text-yellow-50  p-2 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 text-xl md:text-4xl mr-2"></i>
          </a>
      <a href="https://twitter.com/anjalishandilya333/" target="_blank" ><i className="fa-brands fa-x-twitter   text-yellow-50 lg:p-4 p-2 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500  mr-2 text-xl md:text-4xl"></i></a>    
          </div>
      </div>
    <div className=" flex lg:order-2 order-1 justify-center lg:px-4 lg:mr-10 lg:py-10 px-3 md:px-7 w-full">
      <div className="w-full lg:max-w-md bg-gradient-to-tr from-pink-600 to-blue-600 md:p-8 p-2 rounded-2xl mb-0 pb-0">
        <h2 className="md:text-3xl text-xl font-bold text-center text-white md:mb-6 mb-3">Contact Me</h2>

        <form action="https://api.web3forms.com/submit" method="POST" className="md:space-y-5 space-y-2">
        <input type="hidden" name="access_key" value="f026e5e4-08b3-43de-8bd5-ac65a05f1c98"></input>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full md:p-3 p-2 border border-gray-900 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-900 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-white"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            name="message"
            className="w-full p-3 border border-gray-900 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-white"
          ></textarea>
          <button
            type="submit"
            className="w-7/12 p-3 border border-gray-900 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg hover:border-white"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </section>
    <div className="md:flex hidden">
        <Footer/></div>
        <Nav/>
    </>
  );
};

export default Connect;
