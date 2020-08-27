export class Epass{
  id:number;
  emailId:string;
  userName:string;
  from:string;
  to:string;
  reason:string;
  date:string=`${(new Date()).getDate()}/${(new Date()).getMonth()+1}/${(new Date()).getFullYear()}`;
  phone:number;
}
