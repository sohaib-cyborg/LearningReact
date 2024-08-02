const ContactUs=()=>{
    return(
        <div className="text-center">
     <h1 className="text-2xl font-bold">Contact Us</h1>
     <div className="items-center">
        <form className="flex gap-5">
            <input className="m-2 p-2 border border-solid border-black" type="text" placeholder="Type Your Name"></input> 
            <input className="m-2 p-2 border border-solid border-black" type="text" placeholder="Type Your Message"></input>
            <button className="m-2 p-2 bg-gray-600 text-white rounded-md w-20 text-lg">Submit</button>
        </form>
     </div>
     </div>
    );
}
export default ContactUs;