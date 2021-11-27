const Contact = ()=>{
return(
    <div>
      
     <h1>Contact me</h1>
      
      <form action="mailto:utkasrhsinghal.met18@itbhu.ac.in" method="post" enctype="text/plain">
        <label for="">Your Name:</label>
        <input type="text" name="Your Name" value="" /><br/>
        <label for="">Your Email:</label>
        <input type="email" name="Your Email" value="" /><br/>
        <label for="">Your Message:</label>
        <textarea name="Your Message" rows="5" cols="30"></textarea><br/>
        <input type="submit" name="" /><br/>
        
      </form>
    
    </div>
    );
}

export default Contact;