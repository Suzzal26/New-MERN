const Contact = () => {
  let name="";

/*   const register = () => {
    alert("Thank you For contacting us");
  };
  const sendForm = (name) => {
    alert(`Thank you ${name}`);
  }; */

  const verify = () => {
  const input=document.getElementById("name")
  name=input.value.trim().toLowerCase();

  
  const welcomeMessage = name === "suzzal" ? "Welcome Admin" : "Welcome User";
    
    alert(welcomeMessage);
  };


  return (
    <div>
      Contact
      <br />
      {/* <button onClick={register}>Submit</button>
      <button onClick={() => sendForm("suzzal")}>Thank you</button>
      <input placeholder="Enter your name" id="name"></input>
      <button onClick={() => sendForm(document.getElementById("name").value)}>
        Register
      </button>
      <input placeholder="Enter your first name" /> */}
      <input
        placeholder="Enter your name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={verify}>Register</button>
    </div>
  );
};

export default Contact;

//Reimprovise this jsx code without using react methods because we are gonna learn it later, we have mastered js so only js used. Also use ternary operator
//if your name is on input field return welcome admin, else return welcome user (onsubmit)
