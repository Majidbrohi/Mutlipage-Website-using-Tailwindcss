export default function Contact() {
    return (
        <div className="about bg-cover bg-center bg-no-repeat w-full h-full" style={{backgroundImage: "url('/img/about.jpg')",}}>
            <br />
            <center>
                <div className=" about-box block bg-[rgba(0,0,0,0.7)] w-[50%] h-[400px] mx-[10px] my-[100px] line-height-[40px] border-2 border-black border-dotted rounded-[25px] text-white text-center p-[70px]">
                    <h1 className="about-h1 capitalize text-[30px] m-2">Contact Us</h1>
                    <form action="" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                placeholder="Enter your name"
                                className="input w-[50%] rounded-[25px] m-[5px] text-black"
                                
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                placeholder="Enter your email"
                                className="input w-[50%] rounded-[25px] m-[5px] text-black"
                                
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message:</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                placeholder="Enter your message" 
                                className="input w-[50%] rounded-[25px] m-[5px] text-black"
                                
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="box2-btn border-[1px] border-black rounded-[25px] w-[50%] bg-[#a1662f] text-white text-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </center>
            <br />
        </div>
    );
}
