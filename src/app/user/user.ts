export class User {
    
      uid: String;
      fname: String;
      lname: String;
      email: String;
      username:String;
      password: String;
      gender: String;
      status: String;
      description:String;
      address:String;
      constructor(id: string,username:String,fname:String,lname:String,password:String,gender:String,status:string, description: string, address: string, email: string){
        this.uid = id;
        this.username=username;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password=password;
        this.gender=gender;
        this.status=status;
        this.description=description;
        this.address=address;
      }
    
    }