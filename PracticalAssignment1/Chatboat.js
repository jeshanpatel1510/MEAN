module.exports.Reply = (msg)=>{
    this.Bot_Name = "Bot_Webby";
    this.Bot_Domain = "Webby Infotech";
    this.Bot_Department = "IT";
    this.Bot_employee = 10;
    this.Bot_Technologies = "JavaScript, PHP, Java, ASP.NET, MEAN/MERN, ASP.NET Core";

    let message = msg.toLowerCase();

    if(message.indexOf("hii")>-1 || message.indexOf("hello")>-1 || message.indexOf("hyy")>-1)
    {
        return "Hello !!";
    }
    else if(message.indexOf("domain")>-1 || message.indexOf("institute")>-1)
    {
        return "Domain : "+this.Bot_Domain + "\nDepartment : "+this.Bot_Department;
    }
    else if(message.indexOf("name")>-1 || message.indexOf("who")>-1)
    {
        return "I'm "+this.Bot_Name;
    }
    else if(message.indexOf("how")>-1 || message.indexOf("many")>-1 || message.indexOf("employees")>-1)
    {
        return "No of Employees : "+this.Bot_employee;
    }
    else if(message.indexOf("which")>-1 || message.indexOf("technologies")>-1)
    {
        return "Technologies on Which we are working on : "+ this.Bot_Technologies;
    }
    else if(message.indexOf("thank")>-1 || message.indexOf("you")>-1 || message.indexOf("thanks")>-1)
    {
        return "My Pleasure!! :)\nTell me more Questions if you have (^_^)";
    }
    else if(message.indexOf("byy")>-1 || message.indexOf("byby")>-1 || message.indexOf("bye")>-1 || message.indexOf("by")>-1)
    {
        return "Thank You!! \nVisit Again\nTake Care\nBye!! <3";
        
    }
    else
    {
        return "Sorry!! I don't get your query!! :(";
    }
}