import mongoose from "mongoose";

export default class Content{
    _id : Number = 0;
    Name : String = "";
    Cast1 : String = "";
    Cast2 : String = "";
    Episodes : Number = 0;
    Aired : Date = new Date();
    Image : String = "";
}